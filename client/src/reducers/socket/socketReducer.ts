import { Reducer } from "redux";
import { SocketAction, SOCKET } from "../../actions/types";

export type SocketState = SocketIOClient.Socket | null;

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
