import * as socketIO from "socket.io-client";

import { socketOptions, URL } from "./testSocketConfig";
import {
  CHALLENGE,
  CHALLENGE_ACCEPTED,
  JOIN_SUCCESS,
  JOIN_ROOM,
  TIC_TAC_TOE
} from "../../../client/src/constants/events";
import {
  Challenge,
  TicTacToeMove
} from "../../interfaces/clientEvents/roomEvents";

describe("TicTacToe listeners", () => {
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
        socket1.emit(JOIN_ROOM, { name: name1, room });
      });
      socket2.on(CHALLENGE_ACCEPTED, ({ user }: { user: string }) => {
        done();
      });
      socket1.on(JOIN_SUCCESS, () => {
        socket2.emit(JOIN_ROOM, { name: name2, room });
      });
      socket1.on(CHALLENGE, (challenge: Challenge) => {
        socket1.emit(CHALLENGE_ACCEPTED, challenge);
      });
      socket2.on(JOIN_SUCCESS, () => {
        socket2.emit(CHALLENGE, { user: name1 });
      });
    });
  });

  it("should send field index on TIC_TAC_TOE", done => {
    socket1.on(TIC_TAC_TOE, (move: TicTacToeMove) => {
      expect(move.index).toEqual(4);
      done();
    });

    socket2.emit(TIC_TAC_TOE, { index: 4 });
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
