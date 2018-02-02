import { Message, User } from "./general";

export interface RootState {
  roomMessages: RoomMessagesState;
  challenger: ChallengerState;
  socket: SocketState;
  users: UserState;
  room: RoomState;
}

export type SocketState = SocketIOClient.Socket | null;
export type RoomMessagesState = Message[];
export type ChallengerState = string | null;
export type RoomState = string | null;
export type UserState = User[];
