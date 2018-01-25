// import * as request from "supertest";
import * as socketIO from "socket.io-client";
import { Socket } from "socket.io-client";
import { Message } from "../utils/message";
import "../server";
import {
  JOIN_SUCCESS,
  JOIN_ROOM,
  NEW_ROOM_MSG
} from "../../client/src/event-constants/index";

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
    const message = "hello there!";

    socket.on(JOIN_SUCCESS, () => {
      socket.emit(NEW_ROOM_MSG, message);
    });

    socket.on(NEW_ROOM_MSG, (data: Message) => {
      expect(data).toMatchObject({ message, from: name });
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
