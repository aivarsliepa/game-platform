import { Reducer } from "redux";

import { RootAction } from "../../../interfaces/actions/rootAction";
import { INIT_TIC_TAC_TOE } from "../../../constants/actions";

export const reducer: Reducer<boolean> = (
  state = false,
  action: RootAction
) => {
  switch (action.type) {
    case INIT_TIC_TAC_TOE:
      return action.payload.myMove;
    default:
      return state;
  }
};
