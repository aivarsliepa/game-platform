import * as v4 from "uuid/v4";

import { User } from "../interfaces/general";
import {
  ADD_ROOM_MSG,
  ADD_USER,
  REMOVE_USER,
  NEW_ROOM,
  NEW_CHALLENGER,
  NEW_OPPONENTS
} from "../constants/actions";
import {
  NewRoomMessage,
  Challenge
} from "../interfaces/serverEvents/roomEvents";
import { Actions } from "../interfaces/actions/rootAction";
import { OpponentsState } from "../interfaces/states";

export const addRoomMessage = ({
  from,
  message,
  time
}: NewRoomMessage): Actions[typeof ADD_ROOM_MSG] => ({
  type: ADD_ROOM_MSG,
  payload: {
    message: { from, message, time, id: v4() }
  }
});

export const addUser = (user: User): Actions[typeof ADD_USER] => ({
  type: ADD_USER,
  payload: { users: [user] }
});

export const removeUser = (user: User): Actions[typeof REMOVE_USER] => ({
  type: REMOVE_USER,
  payload: { users: [user] }
});

export const newRoom = (
  room: string,
  users: string[]
): Actions[typeof NEW_ROOM] => ({
  type: NEW_ROOM,
  payload: {
    room,
    users
  }
});

export const newChallenger = (
  challenge: Challenge
): Actions[typeof NEW_CHALLENGER] => ({
  type: NEW_CHALLENGER,
  payload: { challenge }
});

export const removeChallenger = (): Actions[typeof NEW_CHALLENGER] => ({
  type: NEW_CHALLENGER,
  payload: { challenge: null }
});

export const newOpponents = (
  opponents: OpponentsState
): Actions[typeof NEW_OPPONENTS] => ({
  type: NEW_OPPONENTS,
  payload: { opponents }
});
