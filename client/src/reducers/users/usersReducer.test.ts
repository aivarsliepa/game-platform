import * as deepFreeze from "deep-freeze";
import { reducer, UserState } from "./usersReducer";
import { NEW_ROOM } from "../../actions/types";
import { removeUser, addUser } from "../../actions/creators";

describe("usersReducer", () => {
  const testUser = "testUser";
  let initialState: UserState;

  beforeEach(() => {
    initialState = [testUser];
    deepFreeze(initialState);
  });

  it("ADD_USER should add new user", () => {
    const newUser = "newUser";
    const result = reducer(initialState, addUser(newUser));
    expect(result).toEqual(expect.arrayContaining([testUser, newUser]));
  });

  it("REMOVE_USER should remove a user", () => {
    const result = reducer(initialState, removeUser(testUser));
    expect(result).toEqual([]);
  });

  it("NEW_ROOM should add user list", () => {
    const user1 = "user1";
    const user2 = "user2";
    const result = reducer(initialState, {
      type: NEW_ROOM,
      payload: { users: [user1, user2] }
    });
    expect(result).toEqual(expect.arrayContaining([user1, user2]));
  });
});
