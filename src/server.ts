import * as express from "express";
import { Request, Response } from "express";
import * as http from "http";
import * as socketIO from "socket.io";

import {
  JOIN_ROOM,
  JOIN_SUCCESS,
  NEW_ROOM_MSG
} from "../client/src/event-constants";
import { UserData } from "./data/User";
import { isRealString } from "./utils/validate";
import { generateMessage } from "./utils/message";

const PORT = process.env.PORT || 5000;
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const server = http.createServer(app);
export const io = socketIO(server);

export const users = new UserData();

io.on("connection", socket => {
  users.addUser({ id: socket.id });

  socket.on(JOIN_ROOM, ({ name, room }, callback) => {
    if (isRealString(name) && isRealString(room)) {
      const roomId = room.trim().toLowerCase();
      users.removeUser(socket.id);
      users.addUser({ id: socket.id, name, room: roomId });
      socket.join(roomId, err => {
        if (!err) {
          socket.emit(JOIN_SUCCESS, roomId);
        }
      });
      console.log(users.getUserList());
    }
  });

  socket.on(NEW_ROOM_MSG, (msg: string) => {
    const user = users.getUser(socket.id);
    console.log(msg);
    if (!user || !isRealString(msg)) {
      return;
    }

    io.to(user.room).emit(NEW_ROOM_MSG, generateMessage(user.name, msg));
  });

  socket.on("disconnect", () => {
    const user = users.removeUser(socket.id);
    console.log(users.getCount());
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default server;
