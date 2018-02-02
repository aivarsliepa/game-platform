import {
  JOIN_ROOM,
  JOIN_SUCCESS,
  NEW_ROOM_MSG,
  ADD_USER,
  REMOVE_USER,
  CHALLENGE
} from "../../client/src/constants/events";
import {
  JoinRoom,
  NewRoomMessage,
  Challenge
} from "../interfaces/clientEvents/roomEvents";
import { UserData } from "../data/User";
import { generateMessage } from "../utils/message";

export const users = new UserData();

const listeners = (io: SocketIO.Server) => {
  io.on("connection", socket => {
    users.addUser({ id: socket.id, name: "", room: "" });

    socket.on(JOIN_ROOM, ({ name, room }: JoinRoom, callback) => {
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
        socket.to(opponent.id).emit(CHALLENGE, { user: challenger.name });
      }
    });

    socket.on("disconnect", () => {
      const user = users.removeUser(socket.id);
      if (user) {
        io.to(user.room).emit(REMOVE_USER, { user: user.name });
      }
    });
  });
};

export default listeners;
