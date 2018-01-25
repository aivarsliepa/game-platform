import { Reducer, combineReducers } from "redux";
import { RoomState, roomReducer as room } from "./room/roomReducer";
import { SocketState, socketReducer as socket } from "./socket/socketReducer";

export interface RootState {
  room: RoomState;
  socket: SocketState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  socket,
  room
});

export default rootReducer;
