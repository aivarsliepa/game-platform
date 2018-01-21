// import * as request from "supertest";
import * as socketIO from "socket.io-client";
import { Socket } from "socket.io-client";

describe("Socket Test", () => {
  let socket: SocketIOClient.Socket;

  beforeEach(done => {
    socket = socketIO.connect("http://localhost:5000", {
      reconnectionDelay: 0,
      forceNew: true
    });

    socket.on("connect", () => {
      done();
    });
  });

  it("some random test", done => {
    expect(socket.connected).toBeTruthy();
    done();
  });

  it("should receive new message", done => {
    socket.on("newMsg", (data: string) => {
      expect(data).toBe("Hello There, from the server socket!");
      done();
    });
  });

  afterEach(done => {
    if (socket.connected) {
      socket.disconnect();
    }
    done();
  });
});
