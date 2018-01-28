import * as deepFreeze from "deep-freeze";

import { reducer } from "./roomMessagesReducer";
import { addRoomMessage } from "../../actions/creators";

describe("roomMessagesReducer", () => {
  it("should add new message", () => {
    const previousItem = { message: "hey", from: "test", time: 123, id: "123" };
    const previousState = [previousItem];
    const newItem = {
      message: "ho",
      from: "testtwo",
      time: 1234
    };

    deepFreeze(previousState);
    const result = reducer(previousState, addRoomMessage(newItem));

    expect(result.length).toBe(2);
    expect(result).toEqual(
      expect.arrayContaining([
        previousItem,
        { ...newItem, id: expect.any(String) }
      ])
    );
  });
});
