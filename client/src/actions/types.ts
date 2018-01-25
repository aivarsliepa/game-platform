import { Action } from "redux";

export const NEW_ROOM = "NEW_ROOM";
export const SOCKET = "SOCKET";

export interface NewRoomAction extends Action {
  room: string;
}
export interface SocketAction extends Action {
  socket: SocketIOClient.Socket;
}
