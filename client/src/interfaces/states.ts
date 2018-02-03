import { Message, User } from "./general";
import { Challenge } from "./serverEvents/roomEvents";

export interface RootState {
  readonly roomMessages: RoomMessagesState;
  readonly challenge: ChallengeState;
  readonly socket: SocketState;
  readonly users: UserState;
  readonly room: RoomState;
}

export type ChallengeState = Challenge | null;
export type SocketState = SocketIOClient.Socket | null;
export type RoomMessagesState = Message[];

export type RoomState = string | null;
export type UserState = User[];
