import { Store } from "redux";

import {
  JOIN_SUCCESS,
  NEW_ROOM_MSG,
  REMOVE_USER,
  ADD_USER,
  CHALLENGE,
  CHALLENGE_ACCEPTED
} from "../constants/events";
import { RootState } from "../interfaces/states";
import {
  newRoom,
  addRoomMessage,
  removeUser,
  addUser,
  newChallenger,
  newOpponents
} from "../actions/creators";
import {
  NewRoomMessage,
  Challenge,
  RemoveUser,
  AddUser
} from "../interfaces/serverEvents/roomEvents";

import history from "../history";
import { Opponent } from "../interfaces/general";

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

  socket.on(CHALLENGE, (challenge: Challenge): void => {
    store.dispatch(newChallenger(challenge));
  });

  socket.on(CHALLENGE_ACCEPTED, (challenge: Challenge): void => {
    const opponent: Opponent = {
      user: challenge.user,
      firstMove: true
    };
    store.dispatch(newOpponents([opponent]));
    const { room } = store.getState();
    history.push(`/game/${room}`);
  });
};

export default listeners;
