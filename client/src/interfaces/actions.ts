import { Action } from "redux";
import { RoomState, SocketState, UserState, ChallengerState } from "./states";
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

export interface AddRoomMessageAction extends Action {
  payload: {
    message: Message;
  };
}

export interface UserAction extends Action {
  payload: {
    users: UserState;
  };
}

export interface NewChallengerAction extends Action {
  payload: {
    challenger: ChallengerState;
  };
}
