import {
  // INIT_TIC_TAC_TOE,
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
import { Message } from "../general";
import {
  removeChallenger,
  addRoomMessage,
  newChallenger,
  newOpponents,
  removeUser,
  addUser,
  newRoom
} from "../../actions/creators";

interface NewRoomAction {
  type: typeof NEW_ROOM;
  payload: {
    room: RoomState;
    users: UserState;
  };
}

interface SocketAction {
  type: typeof SOCKET;
  payload: {
    socket: SocketState;
  };
}

interface RoomMessageAction {
  type: typeof ADD_ROOM_MSG;
  payload: {
    message: Message;
  };
}

interface RemoveUserAction {
  type: typeof REMOVE_USER;
  payload: {
    users: UserState;
  };
}

interface AddUserAction {
  type: typeof ADD_USER;
  payload: {
    users: UserState;
  };
}

interface NewChallengerAction {
  type: typeof NEW_CHALLENGER;
  payload: {
    challenge: ChallengeState;
  };
}

interface NewOpponentsAction {
  type: typeof NEW_OPPONENTS;
  payload: {
    opponents: OpponentsState;
  };
}

export type Actions = {
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
  removeChallenger,
  addRoomMessage,
  newChallenger,
  newOpponents,
  removeUser,
  addUser,
  newRoom
};
