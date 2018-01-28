import * as React from "react";
import { Component, FormEvent, ChangeEvent } from "react";
import { connect } from "react-redux";

import "./NewMessageForm.css";
import { NEW_ROOM_MSG } from "../../../constants/events";
import { SocketState, RootState } from "../../../interfaces/states";

interface NewMessageFormState {
  text: string;
}

interface NewMessageFormProps {
  socket: SocketState;
}

class NewMessageForm extends Component<
  NewMessageFormProps,
  NewMessageFormState
> {
  constructor(props: NewMessageFormProps) {
    super(props);
    this.state = { text: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
  }

  handleMsgChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ text: event.target.value });
  }
  handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const socket = this.props.socket;
    if (socket) {
      socket.emit(NEW_ROOM_MSG, this.state.text);
    }
  }
  render() {
    return (
      <div className="NewMessageForm card-panel">
        <form autoComplete="off" onSubmit={this.handleSubmit} className="row">
          <div className="input-field NewMessageForm_input col s10">
            <input
              className="validate"
              placeholder="Write a message"
              maxLength={140}
              type="text"
              onChange={this.handleMsgChange}
              value={this.state.text}
            />
          </div>
          <button className="waves-effect waves-light btn NewMessageForm_btn col s2">
            Send
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ socket }: RootState): NewMessageFormProps {
  return { socket };
}

export default connect(mapStateToProps)(NewMessageForm);
