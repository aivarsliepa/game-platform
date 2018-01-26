import { RootState } from "../reducers";
import { Message } from "../reducers/roomMessages/roomMessagesReducer";

const roomMsgs: Message[] = [
  {
    from: "Aivars",
    message:
      " Test message 1 Test message 1 Test message 1 Test message 1 Test" +
      " message 1 Test message 1 Test message 1 Test message 1",
    time: new Date().getTime()
  },
  {
    from: "McGayver",
    message:
      " Test message 1 Test message 1 Test message 1 Test message 1 Test" +
      " message 1 Test message 1 Test message 1 Test message 1",
    time: new Date().getTime()
  },
  {
    from: "The Dude",
    message:
      " Test message 1 Test message 1 Test message 1 Test message 1 Test" +
      " message 1 Test message 1 Test message 1 Test message 1",
    time: new Date().getTime()
  },
  {
    from: "General Kenobi",
    message: "Hello there!",
    time: new Date().getTime()
  }
];

const devState: RootState = {
  room: "TicTacToe",
  socket: null,
  roomMessages: roomMsgs
};

export default devState;
