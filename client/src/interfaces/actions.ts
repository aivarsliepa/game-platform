import { Action } from "redux";

import {
  RoomState,
  SocketState,
  UserState,
  OpponentsState,
  ChallengeState
} from "./states";
import { Message } from "./general";

export interface NewRoomAction extends Action {
  payload: {
    room: RoomState;
  };
}

export interface SocketAction extends Action {
  payload: {
    socket: SocketState;
  };
}

export interface RoomMessageAction extends Action {
  payload: {
    message: Message;
  };
}

export interface UserAction extends Action {
  payload: {
    users: UserState;
  };
}

export interface ChallengerAction extends Action {
  payload: {
    challenge: ChallengeState;
  };
}

export interface OpponentsAction extends Action {
  payload: {
    opponents: OpponentsState;
  };
}
