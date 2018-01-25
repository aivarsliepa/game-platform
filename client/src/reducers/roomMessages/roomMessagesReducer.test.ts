import * as deepFreeze from "deep-freeze";
import { reducer } from "./roomMessagesReducer";
import { ADD_ROOM_MSG } from "../../actions/types";

describe("roomMessagesReducer", () => {
  it("should add new message", () => {
    const previousItem = { message: "hey", from: "test", time: 123 };
    const previousState = [previousItem];
    const newItem = {
      message: "ho",
      from: "testtwo",
      time: 1234
    };
    const action = {
      ...newItem,
      type: ADD_ROOM_MSG
    };

    deepFreeze(previousState);
    const result = reducer(previousState, action);

    expect(result.length).toBe(2);
    expect(result).toEqual([previousItem, newItem]);
  });
});
