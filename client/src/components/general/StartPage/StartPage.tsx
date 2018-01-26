import * as React from "react";
import { Component, ChangeEvent, FormEvent } from "react";
import "./StartPage.css";
import { connect } from "react-redux";
import { RootState } from "../../../reducers/index";
import { JOIN_ROOM } from "../../../../src/event-constants/index";
const tictactoe = require("./tic-tac-toe.svg");

interface StartPageState {
  userName: string;
  roomName: string;
}

interface StartPageProps {
  socket: SocketIOClient.Socket | null;
}

class StartPage extends Component<StartPageProps, StartPageState> {
  constructor(props: StartPageProps) {
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
    const socket = this.props.socket;
    if (socket) {
      const room = this.state.roomName;
      const name = this.state.userName;

      socket.emit(JOIN_ROOM, { room, name });
    }
  }

  renderForm(): JSX.Element {
    return (
      <div className="card-panel StartPage">
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
              type="radio"
              id="tictactoe"
              value="TicTacToe"
              onChange={this.handleRoomChange}
            />
            <label htmlFor="tictactoe">
              TicTacToe{" "}
              <img src={tictactoe} alt="tic-tac-toe" width="20" height="20" />
            </label>
          </p>
          <button className="btn waves-effect waves-light" type="submit">
            Enter
          </button>
        </form>
      </div>
    );
  }

  render() {
    return <div>{this.renderForm()}</div>;
  }
}

function mapStateToProps({ socket }: RootState): StartPageProps {
  return { socket };
}

export default connect(mapStateToProps)(StartPage);
