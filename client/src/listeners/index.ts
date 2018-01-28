import { Store } from "redux";

import { RootState } from "../reducers/index";
import { JOIN_SUCCESS, NEW_ROOM_MSG } from "../event-constants/index";
import { NEW_ROOM, ADD_ROOM_MSG } from "../actions/types";
import { Message } from "../reducers/roomMessages/roomMessagesReducer";

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
