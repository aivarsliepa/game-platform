import { Action } from "redux";
import { INIT_TIC_TAC_TOE } from "../constants/actions";

export const initTicTacToeGame = (opponent: string): Action => ({
  type: INIT_TIC_TAC_TOE
});
