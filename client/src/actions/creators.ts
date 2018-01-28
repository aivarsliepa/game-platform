import * as v4 from "uuid/v4";

import { Message, User } from "../interfaces/general";
import { AddRoomMessageAction, UserAction } from "../interfaces/actions";
import { ADD_ROOM_MSG, ADD_USER, REMOVE_USER } from "../constants/actions";

export const addRoomMessage = ({
  from,
  message,
  time
}: Message): AddRoomMessageAction => ({
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
