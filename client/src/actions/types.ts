import { Action } from "redux";
export const NEW_ROOM = "NEW_ROOM";
export interface NewRoomAction extends Action {
  room: string;
}

export const SOCKET = "SOCKET";
export interface SocketAction extends Action {
  socket: SocketIOClient.Socket;
}

export const ADD_ROOM_MSG = "ADD_ROOM_MSG";
export interface AddRoomMessageAction extends Action {
  from: string;
  message: string;
  time: number;
}

export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export interface UserAction extends Action {
  user: string;
}
