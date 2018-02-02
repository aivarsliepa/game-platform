import { Reducer, combineReducers } from "redux";

import { reducer as roomMessages } from "./roomMessages/roomMessagesReducer";
import { reducer as challenger } from "./challenger/challengerReducer";
import { reducer as socket } from "./socket/socketReducer";
import { reducer as users } from "./users/usersReducer";
import { reducer as room } from "./room/roomReducer";
import { RootState } from "../interfaces/states";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  roomMessages,
  challenger,
  socket,
  users,
  room
});

export default rootReducer;
