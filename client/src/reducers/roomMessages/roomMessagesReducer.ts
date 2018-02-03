import { Reducer } from "redux";

import { RootAction } from "../../interfaces/actions/rootAction";
import { ADD_ROOM_MSG } from "../../constants/actions";
import { RoomMessagesState } from "../../interfaces/states";

export const reducer: Reducer<RoomMessagesState> = (
  state = [],
  action: RootAction
) => {
  switch (action.type) {
    case ADD_ROOM_MSG:
      return [...state, action.payload.message];
    default:
      return state;
  }
};
