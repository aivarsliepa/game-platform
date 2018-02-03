export interface NewRoomMessage {
  readonly from: string;
  readonly message: string;
  readonly time: number;
}

export interface AddUser {
  readonly user: string;
}

export interface RemoveUser {
  readonly user: string;
}

export interface Challenge {
  readonly user: string;
  readonly room: string;
}
