import { Reducer } from "redux";

import { NEW_CHALLENGER } from "../../constants/actions";
import { ChallengerAction } from "../../interfaces/actions";
import { ChallengeState } from "../../interfaces/states";

export const reducer: Reducer<ChallengeState> = (
  state = null,
  { type, payload: { challenge } }: ChallengerAction
) => {
  switch (type) {
    case NEW_CHALLENGER:
      return challenge;
    default:
      return state;
  }
};
