import { Store } from "redux";

import {
  JOIN_SUCCESS,
  NEW_ROOM_MSG,
  REMOVE_USER,
  ADD_USER
} from "../constants/events";
import { RootState } from "../interfaces/states";
import {
  newRoom,
  addRoomMessage,
  removeUser,
  addUser
} from "../actions/creators";
import {
  NewRoomMessage,
  RemoveUser,
  AddUser
} from "../interfaces/serverEvents/roomEvents";

const listeners = (
  socket: SocketIOClient.Socket,
  store: Store<RootState>
): void => {
  socket.on(
    JOIN_SUCCESS,
    ({ room, users }: { room: string; users: string[] }): void => {
      store.dispatch(newRoom(room, users));
    }
  );

  socket.on(NEW_ROOM_MSG, (message: NewRoomMessage): void => {
    store.dispatch(addRoomMessage(message));
  });

  socket.on(REMOVE_USER, ({ user }: RemoveUser): void => {
    store.dispatch(removeUser(user));
  });

  socket.on(ADD_USER, ({ user }: AddUser): void => {
    store.dispatch(addUser(user));
  });
};

export default listeners;
