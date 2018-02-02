import * as v4 from "uuid/v4";

import { User } from "../interfaces/general";
import {
  AddRoomMessageAction,
  UserAction,
  NewRoomAction,
  NewChallengerAction
} from "../interfaces/actions";
import {
  ADD_ROOM_MSG,
  ADD_USER,
  REMOVE_USER,
  NEW_ROOM,
  NEW_CHALLENGER
} from "../constants/actions";
import { NewRoomMessage } from "../interfaces/serverEvents/roomEvents";

export const addRoomMessage = ({
  from,
  message,
  time
}: NewRoomMessage): AddRoomMessageAction => ({
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

export const newChallenger = (challenger: User): NewChallengerAction => ({
  type: NEW_CHALLENGER,
  payload: { challenger }
});
