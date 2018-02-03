import { Reducer } from "redux";

export const reducer: Reducer<number[]> = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};
