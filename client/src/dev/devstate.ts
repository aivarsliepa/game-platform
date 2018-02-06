import * as v4 from "uuid/v4";

import { Message } from "../interfaces/general";
import {
  RootState,
  ChallengeState,
  TicTacToeState
} from "../interfaces/states";

const users = ["Aivars", "McGayver", "The Dude", "General Kenobi"];
const roomMessages: Message[] = [
  {
    from: users[0],
    message:
      " Test message 1 Test message 1 Test message 1 Test message 1 Test" +
      " message 1 Test message 1 Test message 1 Test message 1",
    time: new Date().getTime(),
    id: v4()
  },
  {
    from: users[1],
    message:
      " Test message 1 Test message 1 Test message 1 Test message 1 Test" +
      " message 1 Test message 1 Test message 1 Test message 1",
    time: new Date().getTime(),
    id: v4()
  },
  {
    from: users[2],
    message:
      " Test message 1 Test message 1 Test message 1 Test message 1 Test" +
      " message 1 Test message 1 Test message 1 Test message 1",
    time: new Date().getTime(),
    id: v4()
  },
  {
    from: users[3],
    message: "Hello there!",
    time: new Date().getTime(),
    id: v4()
  }
];

const challenge: ChallengeState = {
  room: v4(),
  user: users[3]
};

const tictactoe: TicTacToeState = {
  fields: [],
  myMove: false,
  opponent: users[3],
  side: {
    "1": users[3],
    "2": "You"
  }
};

const devState: RootState = {
  room: "TicTacToe",
  opponents: [],
  roomMessages,
  socket: null,
  tictactoe,
  challenge,
  users
};

export default devState;
