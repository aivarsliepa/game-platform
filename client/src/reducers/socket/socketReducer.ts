import { Reducer } from "redux";
import { SocketAction, SOCKET } from "../../actions/types";

export type SocketState = SocketIOClient.Socket | null;

export const socketReducer: Reducer<SocketState> = (
  state = null,
  { socket, type }: SocketAction
): SocketState => {
  switch (type) {
    case SOCKET:
      return socket;
    default:
      return state;
  }
};
