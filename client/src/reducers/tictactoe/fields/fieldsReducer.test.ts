import * as deepFreeze from "deep-freeze";

import { reducer } from "./fieldsReducer";
import {
  opponentMoveTicTacToeGame,
  myMoveTicTacToeGame
} from "../../../actions/tictactoeCreators";

describe("fieldsReducer", () => {
  let initialState: number[];

  beforeEach(() => {
    initialState = Array(9).fill(0);
    deepFreeze(initialState);
  });

  describe("MY_MOVE_TIC_TAC_TOE", () => {
    it("should return updated state with filled field from specified index", () => {
      const INDEX = 4;
      const PLAYER_SIDE = 2;
      const expectedState = Array(9).fill(0);
      expectedState[INDEX] = PLAYER_SIDE;
      const result = reducer(initialState, myMoveTicTacToeGame(INDEX));
      expect(result).toEqual(expectedState);
    });
  });

  describe("OPPONENT_MOVE_TIC_TAC_TOE", () => {
    it("should return updated state with filled field from specified index", () => {
      const INDEX = 6;
      const OPPONENT_SIDE = 1;
      const expectedState = Array(9).fill(0);
      expectedState[INDEX] = OPPONENT_SIDE;
      const result = reducer(initialState, opponentMoveTicTacToeGame(INDEX));
      expect(result).toEqual(expectedState);
    });
  });
});
