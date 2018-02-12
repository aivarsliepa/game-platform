import * as v4 from "uuid/v4";

import {
  CHALLENGE_ACCEPTED,
  JOIN_SUCCESS,
  NEW_ROOM_MSG,
  REMOVE_USER,
  CHALLENGE,
  JOIN_ROOM,
  ADD_USER
} from "../../client/src/constants/events";
import {
  NewRoomMessage,
  Challenge,
  JoinRoom
} from "../interfaces/clientEvents/roomEvents";
import tictactoeListeners from "./tictactoeListeners";
import { generateMessage } from "../utils/message";
import { UserData } from "../data/User";

// this has been designed currently to only support 1v1... TODO later
const pendingChallenges = new UserData();
export const activeGames = new UserData();
const users = new UserData();

const listeners = (io: SocketIO.Server) => {
  io.on("connection", socket => {
    users.addUser({ id: socket.id, name: "", room: "" });

    socket.on(JOIN_ROOM, ({ name, room }: JoinRoom) => {
      if (name && room) {
        users.removeUser(socket.id);
        users.addUser({ id: socket.id, name, room });
        socket.join(room, err => {
          if (!err) {
            socket.emit(JOIN_SUCCESS, {
              room,
              users: users.getUserNamesForRoom(room)
            });
            socket.broadcast.to(room).emit(ADD_USER, { user: name });
          }
        });
      }
    });

    socket.on(NEW_ROOM_MSG, ({ message }: NewRoomMessage) => {
      const user = users.getUserById(socket.id);
      if (!user || !message) {
        return;
      }

      io.to(user.room).emit(NEW_ROOM_MSG, generateMessage(user.name, message));
    });

    socket.on(CHALLENGE, ({ user }: Challenge) => {
      const opponent = users.getUserByName(user);
      const challenger = users.getUserById(socket.id);
      if (opponent && challenger) {
        const room = v4();
        // TODO remove, if disconnected or rejected
        pendingChallenges.addUser({ ...challenger, ...{ room } });
        pendingChallenges.addUser({ ...opponent, ...{ room } });
        socket.join(room); // TODO maybe leave room, if rejected
        socket.to(opponent.id).emit(CHALLENGE, { user: challenger.name, room });
      }
    });

    // currently will only for 1v1 games... TODO
    socket.on(CHALLENGE_ACCEPTED, ({ room }: Challenge) => {
      const user = pendingChallenges.getUserById(socket.id);
      if (user && room) {
        activeGames.addUser(pendingChallenges.getUserListForRoom(room));
        socket.to(room).emit(CHALLENGE_ACCEPTED, { user: user.name });
        socket.join(room);
      }
    });

    socket.on("disconnect", () => {
      const user = users.removeUser(socket.id);
      pendingChallenges.removeUser(socket.id);
      activeGames.removeUser(socket.id);
      if (user) {
        io.to(user.room).emit(REMOVE_USER, { user: user.name });
      }
    });

    tictactoeListeners(io, socket);
  });
};

export default listeners;
