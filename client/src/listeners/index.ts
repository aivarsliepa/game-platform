import { Store } from "redux";

import { JOIN_SUCCESS, NEW_ROOM_MSG } from "../constants/events";
import { NEW_ROOM, ADD_ROOM_MSG } from "../constants/actions";
import { Message } from "../interfaces/general";
import { RootState } from "../interfaces/states";

const listeners = (socket: SocketIOClient.Socket, store: Store<RootState>) => {
  socket.on(
    JOIN_SUCCESS,
    ({ room, users }: { room: string; users: string[] }) => {
      store.dispatch({
        type: NEW_ROOM,
        payload: {
          room,
          users
        }
      });
    }
  );

  socket.on(NEW_ROOM_MSG, (message: Message) => {
    store.dispatch({ type: ADD_ROOM_MSG, payload: { message } });
  });
};

export default listeners;
