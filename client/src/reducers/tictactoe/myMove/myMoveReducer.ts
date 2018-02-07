import { Reducer } from "redux";

import { RootAction } from "../../../interfaces/actions/rootAction";
import {
  OPPONENT_MOVE_TIC_TAC_TOE,
  MY_MOVE_TIC_TAC_TOE,
  INIT_TIC_TAC_TOE
} from "../../../constants/actions";

export const reducer: Reducer<boolean> = (
  state = false,
  action: RootAction
) => {
  switch (action.type) {
    case OPPONENT_MOVE_TIC_TAC_TOE:
      return true;
    case MY_MOVE_TIC_TAC_TOE:
      return false;
    case INIT_TIC_TAC_TOE:
      return action.payload.myMove;
    default:
      return state;
  }
};
