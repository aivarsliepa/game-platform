import {
  JOIN_ROOM,
  JOIN_SUCCESS,
  NEW_ROOM_MSG,
  ADD_USER,
  REMOVE_USER
} from "../../client/src/constants/events";
import {
  JoinRoom,
  NewRoomMessage
} from "../interfaces/clientEvents/roomEvents";
import { UserData } from "../data/User";
import { generateMessage } from "../utils/message";

export const users = new UserData();

const listeners = (io: SocketIO.Server) => {
  io.on("connection", socket => {
    users.addUser({ id: socket.id, name: "", room: "" });

    socket.on(JOIN_ROOM, ({ name, room }: JoinRoom, callback) => {
      if (name && room) {
        const roomId = room.trim().toLowerCase();
        users.removeUser(socket.id);
        users.addUser({ id: socket.id, name, room: roomId });
        socket.join(roomId, err => {
          if (!err) {
            socket.emit(JOIN_SUCCESS, {
              room: roomId,
              users: users.getUserNamesForRoom(roomId)
            });
            socket.broadcast.to(roomId).emit(ADD_USER, { user: name });
          }
        });
      }
    });

    socket.on(NEW_ROOM_MSG, ({ message }: NewRoomMessage) => {
      const user = users.getUser(socket.id);
      if (!user || !message) {
        return;
      }

      io.to(user.room).emit(NEW_ROOM_MSG, generateMessage(user.name, message));
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
