import { Reducer } from "redux";

export const reducer: Reducer<string> = (state = "", action) => {
  switch (action.type) {
    default:
      return state;
  }
};
