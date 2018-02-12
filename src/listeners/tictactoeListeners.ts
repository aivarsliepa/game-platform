import {
  TIC_TAC_TOE,
  TIC_TAC_TOE_AGAIN
} from "../../client/src/constants/events";
import { TicTacToeMove } from "../../src/interfaces/clientEvents/tictactoeEvents";
import { activeGames } from "./serverListeners";
import { UserData } from "../data/User";

// quickfix for pending new games, TODO - change logic later
const playAgainTemp = new UserData();

const listeners = (io: SocketIO.Server, socket: SocketIO.Socket): void => {
  socket.on(TIC_TAC_TOE, (move: TicTacToeMove) => {
    const user = activeGames.getUserById(socket.id);
    if (user && move.index !== undefined) {
      socket.to(user.room).emit(TIC_TAC_TOE, move);
    }
  });

  // TODO - refactor
  socket.on(TIC_TAC_TOE_AGAIN, () => {
    const user = activeGames.getUserById(socket.id);
    if (user) {
      // to avoid duplicates, TODO - fix later inside data class itself
      playAgainTemp.removeUser(user.id);
      playAgainTemp.addUser(user);
      const users = activeGames.getUserListForRoom(user.room);
      let playAgain = users.length === 2;
      users.forEach(player => {
        if (playAgainTemp.getUserById(player.id) === undefined) {
          playAgain = false;
        }
      });
      if (playAgain) {
        io.to(user.room).emit(TIC_TAC_TOE_AGAIN);
        users.forEach(player => playAgainTemp.removeUser(player.id));
      }
    }
  });
};

export default listeners;
