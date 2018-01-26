import { Reducer } from "redux";
import { ADD_USER, REMOVE_USER, NEW_ROOM } from "../../actions/types";

type User = string;

export type UserState = User[];

export const reducer: Reducer<UserState> = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.user];
    case REMOVE_USER:
      return state.filter(u => u !== action.user);
    case NEW_ROOM:
      return [...state, ...action.users];
    default:
      return state;
  }
};
