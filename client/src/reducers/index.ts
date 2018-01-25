import { Reducer, combineReducers } from "redux";
import { RoomState, reducer as room } from "./room/roomReducer";
import { SocketState, reducer as socket } from "./socket/socketReducer";
import {
  RoomMessagesState,
  reducer as roomMessages
} from "./roomMessages/roomMessagesReducer";

export interface RootState {
  room: RoomState;
  socket: SocketState;
  roomMessages: RoomMessagesState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  roomMessages,
  socket,
  room
});

export default rootReducer;
