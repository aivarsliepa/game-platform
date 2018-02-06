import * as socketIO from "socket.io-client";

import { JOIN_SUCCESS, JOIN_ROOM } from "../../client/src/constants/events";
import { URL, socketOptions } from "../listeners/test/testSocketConfig";

let socket: SocketIOClient.Socket;

describe("Socket server", () => {
  beforeEach(done => {
    socket = socketIO.connect(URL, socketOptions);

    socket.on("connect", () => {
      done();
    });
  });

  it("should receive JOIN_SUCCESS after joining room", done => {
    const room = "testRoom";
    const name = "testName";
    socket.on(JOIN_SUCCESS, () => {
      done();
    });

    socket.emit(JOIN_ROOM, { name, room });
  });

  afterEach(done => {
    if (socket.connected) {
      socket.disconnect();
    }
    done();
  });
});
