import { Reducer } from "redux";

import { SocketState } from "../../interfaces/states";
import { SocketAction } from "../../interfaces/actions";
import { SOCKET } from "../../constants/actions";

export const reducer: Reducer<SocketState> = (
  state = null,
  { type, payload }: SocketAction
) => {
  switch (type) {
    case SOCKET:
      return payload.socket;
    default:
      return state;
  }
};
