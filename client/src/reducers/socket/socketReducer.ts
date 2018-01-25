import { Reducer } from "redux";
import { SocketAction, SOCKET } from "../../actions/types";

export type SocketState = SocketIOClient.Socket | null;

export const reducer: Reducer<SocketState> = (
  state = null,
  { socket, type }: SocketAction
) => {
  switch (type) {
    case SOCKET:
      return socket;
    default:
      return state;
  }
};
