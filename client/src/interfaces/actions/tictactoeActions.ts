import { INIT_TIC_TAC_TOE } from "../../constants/actions";
import { TicTacToeState } from "../states";

export interface InitTicTacToeGame {
  type: typeof INIT_TIC_TAC_TOE;
  payload: TicTacToeState;
}
