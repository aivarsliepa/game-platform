import { Reducer } from "redux";

import { OpponentsState } from "../../interfaces/states";
import { NEW_OPPONENTS, INIT_TIC_TAC_TOE } from "../../constants/actions";
import { RootAction } from "../../interfaces/actions/rootAction";

export const reducer: Reducer<OpponentsState> = (
  state = [],
  action: RootAction
) => {
  switch (action.type) {
    case NEW_OPPONENTS:
      return action.payload.opponents;
    case INIT_TIC_TAC_TOE: // this is quickfix for TicTacToe side-change for new games, TODO-change later
      return [{ ...state[0], ...{ firstMove: !state[0].firstMove } }];
    default:
      return state;
  }
};
