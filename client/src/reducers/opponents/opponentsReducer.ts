import { Reducer } from "redux";

import { OpponentsAction } from "../../interfaces/actions";
import { OpponentsState } from "../../interfaces/states";
import { NEW_OPPONENTS } from "../../constants/actions";

export const reducer: Reducer<OpponentsState> = (
  state = [],
  { type, payload: { opponents = [] } = {} }: OpponentsAction
) => {
  switch (type) {
    case NEW_OPPONENTS:
      return opponents;
    default:
      return state;
  }
};
