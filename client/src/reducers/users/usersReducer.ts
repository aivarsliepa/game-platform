import { Reducer } from "redux";
import {
  ADD_USER,
  REMOVE_USER,
  NEW_ROOM,
  UserAction
} from "../../actions/types";

export type User = string;

export type UserState = User[];

export const reducer: Reducer<UserState> = (
  state = [],
  { type, payload }: UserAction
) => {
  switch (type) {
    case ADD_USER:
      return [...state, ...payload.users];
    case REMOVE_USER:
      return state.filter(u => u !== payload.users[0]);
    case NEW_ROOM:
      return payload.users;
    default:
      return state;
  }
};
