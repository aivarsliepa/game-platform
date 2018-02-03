import { Component, ChangeEvent, FormEvent } from "react";
import { connect, MapStateToProps } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import * as React from "react";

import { RootState, SocketState, RoomState } from "../../../interfaces/states";
import { JOIN_ROOM } from "../../../constants/events";
import "./StartPage.css";

const tictactoe = require("./tic-tac-toe.svg");

interface StartPageState {
  name: string;
  room: string;
}
interface TStateProps {
  socket: SocketState;
  room: RoomState;
}

type StartPageProps = RouteComponentProps<null> & TStateProps;

class StartPage extends Component<StartPageProps, StartPageState> {
  constructor(props: StartPageProps) {
    super(props);
    this.state = {
      room: "",
      name: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
  }

  componentDidMount() {
    this.redirectIfNeeded();
  }

  componentDidUpdate() {
    this.redirectIfNeeded();
  }

  redirectIfNeeded() {
    const { room, history } = this.props;
    if (room) {
      history.replace(`/room/${room}`);
    }
  }

  handleNameChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ name: event.target.value });
  }

  handleRoomChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ room: event.target.value });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { socket } = this.props;
    if (socket) {
      const { room, name } = this.state;
      socket.emit(JOIN_ROOM, { room, name });
    }
  }

  renderForm() {
    return (
      <div className="card-panel StartPage">
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="input-field">
            <input
              id="name"
              type="text"
              className="validate"
              value={this.state.name}
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

const mapStateToProps: MapStateToProps<TStateProps, null, RootState> = ({
  socket,
  room
}) => ({ room, socket });

export default connect(mapStateToProps)(withRouter(StartPage));
