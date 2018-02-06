export interface Message {
  readonly from: string;
  readonly message: string;
  readonly time: number;
  readonly id: string;
}

export type User = string;

export interface Opponent {
  user: User;
  firstMove: boolean;
}
