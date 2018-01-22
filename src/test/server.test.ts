// import * as request from "supertest";
import * as socketIO from "socket.io-client";
import { Socket } from "socket.io-client";
import { Message } from "../utils/message";
import "../server";

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

  it("should be connected", done => {
    expect(socket.connected).toBeTruthy();
    done();
  });

  it("should receive message when sent", done => {
    const name = "user1";
    const room = "room1";
    const msg = "hello there!";

    socket.on("joinSuccess", () => {
      socket.emit("roomMsg", { msg });
    });

    socket.on("roomMsg", (data: Message) => {
      expect(data).toMatchObject({ msg, from: name });
      done();
    });

    socket.emit("join", { name, room });
  });

  afterEach(done => {
    if (socket.connected) {
      socket.disconnect();
    }
    done();
  });
});
