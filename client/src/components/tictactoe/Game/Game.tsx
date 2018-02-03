import * as React from "react";
import { Component } from "react";
import Board from "../Board/Board";

export interface GameState {
  fields: number[];
}

const players = {
  "1": "cross",
  "2": "circle"
};

class Game extends Component<Object, GameState> {
  private next: number = 1;
  constructor(props: Object) {
    super(props);
    this.state = {
      fields: Array(9).fill(0)
    };
    this.handleClick = this.handleClick.bind(this);
  }

  calculateWinner(squares: number[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] !== 0 &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  handleClick(i: number): void {
    const fields = this.state.fields.slice();
    if (fields[i] !== 0 || this.calculateWinner(fields) !== null) {
      return;
    }
    fields[i] = this.next;
    this.setState({ fields });
    this.next = this.next === 1 ? 2 : 1;
  }

  render() {
    const winner = this.calculateWinner(this.state.fields);
    return (
      <div>
        <Board fields={this.state.fields} onClick={i => this.handleClick(i)} />
        {winner ? `Winner is ${players[winner]}` : ""}
      </div>
    );
  }
}

export default Game;
