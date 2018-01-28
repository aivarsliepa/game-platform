import { Reducer } from "redux";
import { ADD_ROOM_MSG, AddRoomMessageAction } from "../../actions/types";

export interface Message {
  readonly from: string;
  readonly message: string;
  readonly time: number;
  readonly id?: string;
}

export type RoomMessagesState = Message[];

export const reducer: Reducer<RoomMessagesState> = (
  state = [],
  { type, payload }: AddRoomMessageAction
) => {
  switch (type) {
    case ADD_ROOM_MSG:
      return [...state, payload.message];
    default:
      return state;
  }
};
