import { Reducer } from "redux";

import { OpponentsState } from "../../interfaces/states";
import { NEW_OPPONENTS } from "../../constants/actions";
import { RootAction } from "../../interfaces/actions/rootAction";

export const reducer: Reducer<OpponentsState> = (
  state = [],
  action: RootAction
) => {
  switch (action.type) {
    case NEW_OPPONENTS:
      return action.payload.opponents;
    default:
      return state;
  }
};
