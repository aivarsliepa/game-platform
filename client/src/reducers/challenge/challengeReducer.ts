import { Reducer } from "redux";

import { NEW_CHALLENGER } from "../../constants/actions";
import { RootAction } from "../../interfaces/actions/rootAction";
import { ChallengeState } from "../../interfaces/states";

export const reducer: Reducer<ChallengeState> = (
  state = null,
  action: RootAction
) => {
  switch (action.type) {
    case NEW_CHALLENGER:
      return action.payload.challenge;
    default:
      return state;
  }
};
