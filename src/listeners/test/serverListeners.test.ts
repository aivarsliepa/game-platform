import * as socketIO from "socket.io-client";
import { Socket } from "socket.io-client";

import { Message } from "../../utils/message";
import "../../server";
import {
  JOIN_SUCCESS,
  JOIN_ROOM,
  NEW_ROOM_MSG,
  ADD_USER,
  REMOVE_USER
} from "../../../client/src/constants/events";

const URL = "http://localhost:5000";
const socketOptions = {
  reconnectionDelay: 0,
  forceNew: true
};

describe("Socket message test", () => {
  let socket: SocketIOClient.Socket;

  beforeEach(done => {
    socket = socketIO.connect(URL, socketOptions);

    socket.on("connect", () => {
      done();
    });
  });

  it("should receive message when sent", done => {
    const name = "user1";
    const room = "room1";
    const message = "hello there!";

    socket.on(JOIN_SUCCESS, () => {
      socket.emit(NEW_ROOM_MSG, { message });
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

describe("Socket join/leave room user update test", () => {
  let socket1: SocketIOClient.Socket;
  let socket2: SocketIOClient.Socket;
  const name1 = "user1";
  const name2 = "user2";
  const room = "room2";

  beforeEach(done => {
    socket1 = socketIO.connect(URL, socketOptions);

    socket1.on("connect", () => {
      socket2 = socketIO.connect(URL, socketOptions);

      socket2.on("connect", () => {
        done();
      });
    });
  });

  it("should update other socket when new user joins room", done => {
    socket1.on(ADD_USER, ({ user }: { user: string }) => {
      expect(user).toBe(name2);
      done();
    });

    socket1.on(JOIN_SUCCESS, () => {
      socket2.emit(JOIN_ROOM, { name: name2, room });
    });

    socket1.emit(JOIN_ROOM, { name: name1, room });
  });

  it("should update other socket when user leaves room", done => {
    socket1.on(REMOVE_USER, ({ user }: { user: string }) => {
      expect(user).toBe(name2);
      done();
    });

    socket1.on(JOIN_SUCCESS, () => {
      socket2.emit(JOIN_ROOM, { name: name2, room });
    });

    socket2.on(JOIN_SUCCESS, () => {
      socket2.disconnect();
    });

    socket1.emit(JOIN_ROOM, { name: name1, room });
  });

  afterEach(done => {
    if (socket1.connected) {
      socket1.disconnect();
    }
    if (socket2.connected) {
      socket2.disconnect();
    }
    done();
  });
});
