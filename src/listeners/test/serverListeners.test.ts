import * as socketIO from "socket.io-client";

import {
  JOIN_SUCCESS,
  JOIN_ROOM,
  NEW_ROOM_MSG,
  ADD_USER,
  REMOVE_USER,
  CHALLENGE,
  CHALLENGE_ACCEPTED
} from "../../../client/src/constants/events";
import { Challenge } from "../../interfaces/clientEvents/roomEvents";
import { socketOptions, URL } from "./testSocketConfig";
import { Message } from "../../utils/message";

let socket1: SocketIOClient.Socket;
let socket2: SocketIOClient.Socket;
const name1 = "user1";
const name2 = "user2";
const room = "room2";

describe("Socket message", () => {
  beforeEach(done => {
    socket1 = socketIO.connect(URL, socketOptions);

    socket1.on("connect", () => {
      done();
    });
  });

  it("should receive message when sent", done => {
    const message = "hello there!";

    socket1.on(JOIN_SUCCESS, () => {
      socket1.emit(NEW_ROOM_MSG, { message });
    });

    socket1.on(NEW_ROOM_MSG, (data: Message) => {
      expect(data).toMatchObject({ message, from: name1 });
      done();
    });

    socket1.emit(JOIN_ROOM, { name: name1, room });
  });

  afterEach(done => {
    if (socket1.connected) {
      socket1.disconnect();
    }
    done();
  });
});

describe("Socket join/leave room user update", () => {
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

describe("Socket challenge user", () => {
  it("should send challenge to other user with challengers name and room and send back name when accepted", done => {
    socket1 = socketIO.connect(URL, socketOptions);
    socket1.on("connect", () => {
      socket2 = socketIO.connect(URL, socketOptions);
      socket2.on("connect", () => {
        socket1.emit(JOIN_ROOM, { name: name1, room });
      });

      socket2.on(CHALLENGE_ACCEPTED, ({ user }: { user: string }) => {
        expect(user).toBe(name1);
        done();
      });
      socket1.on(CHALLENGE, (challenge: Challenge) => {
        expect(challenge.user).toBe(name2);
        expect(challenge.room).toBeTruthy();
        socket1.emit(CHALLENGE_ACCEPTED, challenge);
      });
      socket1.on(JOIN_SUCCESS, () => {
        socket2.emit(JOIN_ROOM, { name: name2, room });
      });
      socket2.on(JOIN_SUCCESS, () => {
        socket2.emit(CHALLENGE, { user: name1 });
      });
    });
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
