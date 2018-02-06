import { Reducer, combineReducers } from "redux";

import { reducer as opponent } from "./opponent/opponentReducer";
import { reducer as myMove } from "./myMove/myMoveReducer";
import { reducer as fields } from "./fields/fieldsReducer";
import { reducer as side } from "./side/sideReducer";
import { TicTacToeState } from "../../interfaces/states";
export const reducer: Reducer<TicTacToeState> = combineReducers({
  opponent,
  myMove,
  fields,
  side
});
