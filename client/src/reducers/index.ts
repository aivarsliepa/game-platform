import { Reducer, combineReducers } from "redux";

import { reducer as roomMessages } from "./roomMessages/roomMessagesReducer";
import { reducer as challenge } from "./challenge/challengeReducer";
import { reducer as opponents } from "./opponents/opponentsReducer";
import { reducer as tictactoe } from "./tictactoe/tictactoeReducer";
import { reducer as socket } from "./socket/socketReducer";
import { reducer as users } from "./users/usersReducer";
import { reducer as room } from "./room/roomReducer";
import { RootState } from "../interfaces/states";

const rootReducer: Reducer<RootState> = combineReducers({
  roomMessages,
  challenge,
  tictactoe,
  opponents,
  socket,
  users,
  room
});

export default rootReducer;
