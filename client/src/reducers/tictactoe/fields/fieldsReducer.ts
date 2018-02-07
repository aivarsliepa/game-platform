import { Reducer } from "redux";

import {
  OPPONENT_MOVE_TIC_TAC_TOE,
  MY_MOVE_TIC_TAC_TOE,
  INIT_TIC_TAC_TOE
} from "../../../constants/actions";
import { RootAction } from "../../../interfaces/actions/rootAction";

export const reducer: Reducer<number[]> = (state = [], action: RootAction) => {
  switch (action.type) {
    case OPPONENT_MOVE_TIC_TAC_TOE:
    case MY_MOVE_TIC_TAC_TOE:
      return [
        ...state.slice(0, action.payload.index),
        action.payload.value,
        ...state.slice(action.payload.index + 1)
      ];
    case INIT_TIC_TAC_TOE:
      return action.payload.fields;
    default:
      return state;
  }
};
