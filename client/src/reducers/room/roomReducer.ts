import { Reducer } from "redux";
import { NewRoomAction, NEW_ROOM } from "../../actions/types";

export type RoomState = string | null;

export const reducer: Reducer<RoomState> = (
  state = null,
  { room, type }: NewRoomAction
) => {
  switch (type) {
    case NEW_ROOM:
      return room;
    default:
      return state;
  }
};
