import { Reducer } from "redux";

import { RootAction } from "../../interfaces/actions/rootAction";
import { RoomState } from "../../interfaces/states";
import { NEW_ROOM } from "../../constants/actions";

export const reducer: Reducer<RoomState> = (
  state = null,
  action: RootAction
) => {
  switch (action.type) {
    case NEW_ROOM:
      return action.payload.room;
    default:
      return state;
  }
};
