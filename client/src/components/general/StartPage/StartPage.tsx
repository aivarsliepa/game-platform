import * as React from "react";
import { Component, ChangeEvent, FormEvent } from "react";
import "./StartPage.css";
const tictactoe = require("./tic-tac-toe.svg");

interface StartPageState {
  userName: string;
  roomName: string;
}

class StartPage extends Component<Object, StartPageState> {
  input: HTMLInputElement | null;
  constructor(props: Object) {
    super(props);
    this.state = {
      roomName: "",
      userName: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
  }

  handleNameChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ userName: event.target.value });
  }

  handleRoomChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ roomName: event.target.value });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(this.state.userName);
    console.log(this.state.roomName);
  }

  render() {
    return (
      <div className="card-panel">
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="input-field">
            <input
              id="name"
              type="text"
              className="validate"
              value={this.state.userName}
              onChange={this.handleNameChange}
            />
            <label htmlFor="name">Display Name</label>
          </div>
          <p>
            <input
              className="with-gap"
              name="room"
              type="radio"
              id="tictactoe"
              value="tictactoe"
              onChange={this.handleRoomChange}
            />
            <label htmlFor="tictactoe">
              TicTacToe{" "}
              <img src={tictactoe} alt="tic-tac-toe" width="20" height="20" />
            </label>
          </p>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }
}

export default StartPage;
