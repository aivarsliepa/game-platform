import { Reducer } from "redux";

import { ADD_USER, REMOVE_USER, NEW_ROOM } from "../../constants/actions";
import { RootAction } from "../../interfaces/actions/rootAction";
import { UserState } from "../../interfaces/states";

export const reducer: Reducer<UserState> = (state = [], action: RootAction) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, ...action.payload.users];
    case REMOVE_USER:
      return state.filter(user => user !== action.payload.users[0]);
    case NEW_ROOM:
      return action.payload.users;
    default:
      return state;
  }
};
