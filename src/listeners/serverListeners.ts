import {
  JOIN_ROOM,
  JOIN_SUCCESS,
  NEW_ROOM_MSG
} from "../../client/src/constants/events";
import { isRealString } from "../utils/validate";
import { UserData } from "../data/User";
import { generateMessage } from "../utils/message";

export const users = new UserData();

const listeners = (io: SocketIO.Server) => {
  io.on("connection", socket => {
    users.addUser({ id: socket.id, name: "", room: "" });

    socket.on(JOIN_ROOM, ({ name, room }, callback) => {
      if (isRealString(name) && isRealString(room)) {
        const roomId = room.trim().toLowerCase();
        users.removeUser(socket.id);
        users.addUser({ id: socket.id, name, room: roomId });
        socket.join(roomId, err => {
          if (!err) {
            socket.emit(JOIN_SUCCESS, {
              room: roomId,
              users: users.getUserNamesForRoom(roomId)
            });
          }
        });
      }
    });

    socket.on(NEW_ROOM_MSG, (msg: string) => {
      const user = users.getUser(socket.id);
      if (!user || !isRealString(msg)) {
        return;
      }

      io.to(user.room).emit(NEW_ROOM_MSG, generateMessage(user.name, msg));
    });

    socket.on("disconnect", () => {
      users.removeUser(socket.id);
    });
  });
};

export default listeners;
