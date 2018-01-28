import { Reducer, combineReducers } from "redux";

import { reducer as room } from "./room/roomReducer";
import { reducer as socket } from "./socket/socketReducer";
import { reducer as roomMessages } from "./roomMessages/roomMessagesReducer";
import { reducer as users } from "./users/usersReducer";
import { RootState } from "../interfaces/states";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  roomMessages,
  socket,
  users,
  room
});

export default rootReducer;
