import { Reducer } from "redux";

import { ChallengerState } from "../../interfaces/states";
import { NewChallengerAction } from "../../interfaces/actions";
import { NEW_CHALLENGER } from "../../constants/actions";

export const reducer: Reducer<ChallengerState> = (
  state = null,
  { type, payload }: NewChallengerAction
) => {
  switch (type) {
    case NEW_CHALLENGER:
      return payload.challenger;
    default:
      return state;
  }
};
