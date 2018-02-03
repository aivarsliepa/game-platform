import * as v4 from "uuid/v4";

import { Message } from "../interfaces/general";
import { RootState, ChallengeState } from "../interfaces/states";

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

const devState: RootState = {
  room: "TicTacToe",
  challenge,
  roomMessages,
  socket: null,
  users
};

export default devState;
