import { Reducer, combineReducers } from "redux";
import { RoomState, reducer as room } from "./room/roomReducer";
import { SocketState, reducer as socket } from "./socket/socketReducer";
import {
  RoomMessagesState,
  reducer as roomMessages
} from "./roomMessages/roomMessagesReducer";
import { UserState, reducer as users } from "./users/usersReducer";

export interface RootState {
  room: RoomState;
  socket: SocketState;
  roomMessages: RoomMessagesState;
  users: UserState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  roomMessages,
  socket,
  users,
  room
});

export default rootReducer;
