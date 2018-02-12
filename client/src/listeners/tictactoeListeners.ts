import { Store } from "redux";

import {
  opponentMoveTicTacToeGame,
  initTicTacToeGame
} from "../actions/tictactoeCreators";
import { TIC_TAC_TOE, TIC_TAC_TOE_AGAIN } from "../constants/events";
import { RootState } from "../interfaces/states";

export const listeners = (
  socket: SocketIOClient.Socket,
  store: Store<RootState>
): void => {
  socket.on(TIC_TAC_TOE, ({ index }: TicTacToeMove) => {
    store.dispatch(opponentMoveTicTacToeGame(index));
  });

  socket.on(TIC_TAC_TOE_AGAIN, () => {
    store.dispatch(initTicTacToeGame());
  });
};
