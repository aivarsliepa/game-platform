import * as express from "express";
import { Request, Response } from "express";
import * as http from "http";
import * as socketIO from "socket.io";

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send({ msg: "Hello There!" });
});

const server = http.createServer(app);
export const io = socketIO(server);

io.on("connection", socket => {
  socket.emit("newMsg", "Hello There, from the server socket!");
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default server;
