import {
  OPPONENT_MOVE_TIC_TAC_TOE,
  MY_MOVE_TIC_TAC_TOE,
  INIT_TIC_TAC_TOE
} from "../constants/actions";
import { Actions } from "../interfaces/actions/rootAction";
import store from "../store/configureStore";

export const initTicTacToeGame = (): Actions[typeof INIT_TIC_TAC_TOE] => {
  const { firstMove, user } = store.getState().opponents[0];
  return {
    type: INIT_TIC_TAC_TOE,
    payload: {
      fields: Array(9).fill(0),
      myMove: !firstMove,
      opponent: user,
      side: { "1": user, "2": "YOU" }
    }
  };
};

export const myMoveTicTacToeGame = (
  index: number
): Actions[typeof MY_MOVE_TIC_TAC_TOE] => ({
  type: MY_MOVE_TIC_TAC_TOE,
  payload: {
    value: 2,
    index
  }
});

export const opponentMoveTicTacToeGame = (
  index: number
): Actions[typeof OPPONENT_MOVE_TIC_TAC_TOE] => ({
  type: OPPONENT_MOVE_TIC_TAC_TOE,
  payload: {
    value: 1,
    index
  }
});
