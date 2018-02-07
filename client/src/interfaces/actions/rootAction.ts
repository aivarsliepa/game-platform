import {
  NEW_CHALLENGER,
  NEW_OPPONENTS,
  ADD_ROOM_MSG,
  REMOVE_USER,
  ADD_USER,
  NEW_ROOM,
  SOCKET
} from "../../constants/actions";
import {
  OpponentsState,
  ChallengeState,
  SocketState,
  RoomState,
  UserState
} from "../states";
import {
  removeChallenger,
  addRoomMessage,
  newChallenger,
  newOpponents,
  removeUser,
  addUser,
  newRoom
} from "../../actions/creators";
import { InitTicTacToeGame, MoveTicTacToeGame } from "./tictactoeActions";
import {
  myMoveTicTacToeGame,
  initTicTacToeGame
} from "../../actions/tictactoeCreators";
import { Message } from "../general";

interface NewRoomAction {
  readonly type: typeof NEW_ROOM;
  readonly payload: {
    readonly room: RoomState;
    readonly users: UserState;
  };
}

interface SocketAction {
  readonly type: typeof SOCKET;
  readonly payload: {
    readonly socket: SocketState;
  };
}

interface RoomMessageAction {
  readonly type: typeof ADD_ROOM_MSG;
  readonly payload: {
    readonly message: Message;
  };
}

interface RemoveUserAction {
  readonly type: typeof REMOVE_USER;
  readonly payload: {
    readonly users: UserState;
  };
}

interface AddUserAction {
  readonly type: typeof ADD_USER;
  readonly payload: {
    readonly users: UserState;
  };
}

interface NewChallengerAction {
  readonly type: typeof NEW_CHALLENGER;
  readonly payload: {
    readonly challenge: ChallengeState;
  };
}

interface NewOpponentsAction {
  readonly type: typeof NEW_OPPONENTS;
  readonly payload: {
    readonly opponents: OpponentsState;
  };
}

export type Actions = {
  OPPONENT_MOVE_TIC_TAC_TOE: MoveTicTacToeGame;
  MY_MOVE_TIC_TAC_TOE: MoveTicTacToeGame;
  INIT_TIC_TAC_TOE: InitTicTacToeGame;
  NEW_CHALLENGER: NewChallengerAction;
  NEW_OPPONENTS: NewOpponentsAction;
  ADD_ROOM_MSG: RoomMessageAction;
  REMOVE_USER: RemoveUserAction;
  NEW_ROOM: NewRoomAction;
  ADD_USER: AddUserAction;
  SOCKET: SocketAction;
};

export type RootAction = Actions[keyof Actions];

export const actions = {
  myMoveTicTacToeGame,
  initTicTacToeGame,
  removeChallenger,
  addRoomMessage,
  newChallenger,
  newOpponents,
  removeUser,
  addUser,
  newRoom
};
