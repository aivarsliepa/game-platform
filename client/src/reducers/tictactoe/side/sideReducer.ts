import { Reducer } from "redux";

import { RootAction } from "../../../interfaces/actions/rootAction";
import { INIT_TIC_TAC_TOE } from "../../../constants/actions";
import { SideState } from "../../../interfaces/states";

export const reducer: Reducer<SideState> = (
  state = { "1": "", "2": "" },
  action: RootAction
) => {
  switch (action.type) {
    case INIT_TIC_TAC_TOE:
      return action.payload.side;
    default:
      return state;
  }
};
