import * as v4 from "uuid/v4";

import { User } from "../interfaces/general";
import {
  RoomMessageAction,
  UserAction,
  NewRoomAction,
  ChallengerAction,
  OpponentsAction
} from "../interfaces/actions";
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
import { OpponentsState } from "../interfaces/states";

export const addRoomMessage = ({
  from,
  message,
  time
}: NewRoomMessage): RoomMessageAction => ({
  type: ADD_ROOM_MSG,
  payload: {
    message: { from, message, time, id: v4() }
  }
});

export const addUser = (user: User): UserAction => ({
  type: ADD_USER,
  payload: { users: [user] }
});

export const removeUser = (user: User): UserAction => ({
  type: REMOVE_USER,
  payload: { users: [user] }
});

export const newRoom = (
  room: string,
  users: string[]
): NewRoomAction & UserAction => ({
  type: NEW_ROOM,
  payload: {
    room,
    users
  }
});

export const newChallenger = (challenge: Challenge): ChallengerAction => ({
  type: NEW_CHALLENGER,
  payload: { challenge }
});

export const removeChallenger = (): ChallengerAction => ({
  type: NEW_CHALLENGER,
  payload: { challenge: null }
});

export const newOpponents = (opponents: OpponentsState): OpponentsAction => ({
  type: NEW_OPPONENTS,
  payload: { opponents }
});
