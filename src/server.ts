import * as express from "express";
import * as http from "http";
import * as socketIO from "socket.io";

import listeners from "./listeners/serverListeners";

const PORT = process.env.PORT || 5000;
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const server = http.createServer(app);
const io = socketIO(server);
listeners(io);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default server;
