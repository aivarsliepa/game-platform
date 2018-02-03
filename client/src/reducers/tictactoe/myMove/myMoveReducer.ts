import { Reducer } from "redux";

export const reducer: Reducer<boolean> = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
