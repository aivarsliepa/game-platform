import { Reducer } from "redux";

import { SocketState } from "../../interfaces/states";
import { RootAction } from "../../interfaces/actions/rootAction";
import { SOCKET } from "../../constants/actions";

export const reducer: Reducer<SocketState> = (
  state = null,
  action: RootAction
) => {
  switch (action.type) {
    case SOCKET:
      return action.payload.socket;
    default:
      return state;
  }
};
