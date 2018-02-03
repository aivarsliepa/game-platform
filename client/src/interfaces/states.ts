import { Message, User } from "./general";
import { Challenge } from "./serverEvents/roomEvents";

export interface RootState {
  roomMessages: RoomMessagesState;
  challenge: ChallengeState;
  socket: SocketState;
  users: UserState;
  room: RoomState;
}

export type ChallengeState = Challenge | null;
export type SocketState = SocketIOClient.Socket | null;
export type RoomMessagesState = Message[];

export type RoomState = string | null;
export type UserState = User[];
