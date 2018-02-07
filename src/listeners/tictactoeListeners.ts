import { TicTacToeMove } from "../../src/interfaces/clientEvents/tictactoeEvents";
import { TIC_TAC_TOE } from "../../client/src/constants/events";
import { activeGames } from "./serverListeners";

const listeners = (socket: SocketIO.Socket): void => {
  socket.on(TIC_TAC_TOE, (move: TicTacToeMove) => {
    const user = activeGames.getUserById(socket.id);
    if (user && move.index !== undefined) {
      socket.broadcast.to(user.room).emit(TIC_TAC_TOE, move);
    }
  });
};

export default listeners;
