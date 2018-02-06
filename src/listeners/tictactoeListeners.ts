import { TicTacToeMove } from "../../src/interfaces/clientEvents/roomEvents";
import { TIC_TAC_TOE } from "../../client/src/constants/events";
import { activeGames } from "./serverListeners";

const listeners = (socket: SocketIO.Socket) => {
  socket.on(TIC_TAC_TOE, (move: TicTacToeMove) => {
    const user = activeGames.getUserById(socket.id);
    if (user) {
      socket.broadcast.to(user.room).emit(TIC_TAC_TOE, move);
    }
  });
};

export default listeners;
