import { Message } from "../interfaces/general";
import { RootState } from "../interfaces/states";

const users = ["Aivars", "McGayver", "The Dude", "General Kenobi"];
const roomMessages: Message[] = [
  {
    from: users[0],
    message:
      " Test message 1 Test message 1 Test message 1 Test message 1 Test" +
      " message 1 Test message 1 Test message 1 Test message 1",
    time: new Date().getTime()
  },
  {
    from: users[1],
    message:
      " Test message 1 Test message 1 Test message 1 Test message 1 Test" +
      " message 1 Test message 1 Test message 1 Test message 1",
    time: new Date().getTime()
  },
  {
    from: users[2],
    message:
      " Test message 1 Test message 1 Test message 1 Test message 1 Test" +
      " message 1 Test message 1 Test message 1 Test message 1",
    time: new Date().getTime()
  },
  {
    from: users[3],
    message: "Hello there!",
    time: new Date().getTime()
  }
];

const devState: RootState = {
  room: "TicTacToe",
  socket: null,
  roomMessages,
  users
};

export default devState;
