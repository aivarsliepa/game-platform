import { Reducer } from "redux";

import { NEW_CHALLENGER, REJECT_CHALLENGER } from "../../constants/actions";
import { NewChallengerAction } from "../../interfaces/actions";
import { ChallengeState } from "../../interfaces/states";

export const reducer: Reducer<ChallengeState> = (
  state = null,
  { type, payload }: NewChallengerAction
) => {
  switch (type) {
    case NEW_CHALLENGER:
      return payload.challenge;
    case REJECT_CHALLENGER:
      return null;
    default:
      return state;
  }
};
