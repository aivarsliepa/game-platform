import * as express from "express";
import { Request, Response } from "express";
import * as http from "http";
import * as socketIO from "socket.io";

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

  socket.on("join", ({ name, room }, callback) => {
    if (isRealString(name) && isRealString(room)) {
      const roomId = room.trim().toLowerCase();
      users.removeUser(socket.id);
      users.addUser({ id: socket.id, name, room: roomId });
      socket.join(roomId, err => {
        if (!err) {
          socket.emit("joinSuccess");
        }
      });
    }
  });

  socket.on("roomMsg", ({ msg }) => {
    const user = users.getUser(socket.id);
    if (!user || !isRealString(msg)) {
      return;
    }
    io.to(user.room).emit("roomMsg", generateMessage(user.name, msg));
  });

  socket.on("disconnect", () => {
    const user = users.removeUser(socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default server;
