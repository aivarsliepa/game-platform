import { Action } from "redux";
import { RoomState } from "../reducers/room/roomReducer";
import { SocketState } from "../reducers/socket/socketReducer";
import { Message } from "../reducers/roomMessages/roomMessagesReducer";
import { UserState } from "../reducers/users/usersReducer";

export const NEW_ROOM = "NEW_ROOM";
export interface NewRoomAction extends Action {
  payload: {
    room: RoomState;
  };
}

export const SOCKET = "SOCKET";
export interface SocketAction extends Action {
  payload: {
    socket: SocketState;
  };
}

export const ADD_ROOM_MSG = "ADD_ROOM_MSG";
export interface AddRoomMessageAction extends Action {
  payload: {
    message: Message;
  };
}

export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export interface UserAction extends Action {
  payload: {
    users: UserState;
  };
}
