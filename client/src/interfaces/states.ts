import { Message, User } from "./general";

export interface RootState {
  room: RoomState;
  socket: SocketState;
  roomMessages: RoomMessagesState;
  users: UserState;
}

export type RoomState = string | null;
export type SocketState = SocketIOClient.Socket | null;
export type RoomMessagesState = Message[];
export type UserState = User[];
