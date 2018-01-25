import { Reducer } from "redux";
import { NewRoomAction, NEW_ROOM } from "../../actions/types";

export type RoomState = string | null;

export const roomReducer: Reducer<RoomState> = (
  state = null,
  { room, type }: NewRoomAction
): RoomState => {
  switch (type) {
    case NEW_ROOM:
      return room;
    default:
      return state;
  }
};
