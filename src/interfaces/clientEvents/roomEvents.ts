export interface JoinRoom {
  readonly name?: string;
  readonly room?: string;
}

export interface NewRoomMessage {
  readonly message?: string;
}

export interface Challenge {
  readonly user?: string;
  readonly room?: string;
}

export interface TicTacToeMove {
  readonly index?: number;
}
