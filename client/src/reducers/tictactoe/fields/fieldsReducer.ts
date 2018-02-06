import { Reducer } from "redux";

import { RootAction } from "../../../interfaces/actions/rootAction";
import { INIT_TIC_TAC_TOE } from "../../../constants/actions";

export const reducer: Reducer<number[]> = (state = [], action: RootAction) => {
  switch (action.type) {
    case INIT_TIC_TAC_TOE:
      return action.payload.fields;
    default:
      return state;
  }
};
