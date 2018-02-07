import { Challenge } from "./serverEvents/roomEvents";
import { Message, User, Opponent } from "./general";

export interface RootState {
  readonly roomMessages: RoomMessagesState;
  readonly tictactoe: TicTacToeState;
  readonly opponents: OpponentsState;
  readonly challenge: ChallengeState;
  readonly socket: SocketState;
  readonly users: UserState;
  readonly room: RoomState;
}

export type SocketState = SocketIOClient.Socket | null;
export type ChallengeState = Challenge | null;
export type RoomMessagesState = Message[];
export type RoomState = string | null;
export type OpponentsState = Opponent[];

export type UserState = User[];

export interface SideState {
  readonly "1": string;
  readonly "2": string;
}

export interface TicTacToeState {
  readonly fields: number[];
  readonly opponent: User;
  readonly myMove: boolean;
  readonly side: SideState;
}
