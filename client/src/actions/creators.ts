import * as v4 from "uuid/v4";

import { Message } from "../reducers/roomMessages/roomMessagesReducer";
import {
  AddRoomMessageAction,
  ADD_ROOM_MSG,
  UserAction,
  ADD_USER,
  REMOVE_USER
} from "./types";
import { User } from "../reducers/users/usersReducer";

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
