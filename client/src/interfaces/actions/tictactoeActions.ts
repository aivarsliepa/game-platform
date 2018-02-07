import {
  OPPONENT_MOVE_TIC_TAC_TOE,
  MY_MOVE_TIC_TAC_TOE,
  INIT_TIC_TAC_TOE
} from "../../constants/actions";
import { TicTacToeState } from "../states";

export interface InitTicTacToeGame {
  type: typeof INIT_TIC_TAC_TOE;
  payload: TicTacToeState;
}

export interface MoveTicTacToeGame {
  type: typeof MY_MOVE_TIC_TAC_TOE | typeof OPPONENT_MOVE_TIC_TAC_TOE;
  payload: {
    index: number;
    value: number;
  };
}
