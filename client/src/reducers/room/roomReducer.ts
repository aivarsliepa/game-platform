import { Reducer } from "redux";

import { RoomState } from "../../interfaces/states";
import { NewRoomAction } from "../../interfaces/actions";
import { NEW_ROOM } from "../../constants/actions";

export const reducer: Reducer<RoomState> = (
  state = null,
  { type, payload }: NewRoomAction
) => {
  switch (type) {
    case NEW_ROOM:
      return payload.room;
    default:
      return state;
  }
};
