import { Reducer } from "redux";

import { RoomMessageAction } from "../../interfaces/actions";
import { ADD_ROOM_MSG } from "../../constants/actions";
import { RoomMessagesState } from "../../interfaces/states";

export const reducer: Reducer<RoomMessagesState> = (
  state = [],
  { type, payload }: RoomMessageAction
) => {
  switch (type) {
    case ADD_ROOM_MSG:
      return [...state, payload.message];
    default:
      return state;
  }
};
