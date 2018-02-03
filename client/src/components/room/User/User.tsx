import { connect, MapStateToProps } from "react-redux";
import * as React from "react";

import { RootState, SocketState } from "../../../interfaces/states";
import { CHALLENGE } from "../../../constants/events";
import "./User.css";

interface TOwnProps {
  name: string;
}

interface UserState {
  visible: boolean;
}

interface TStateProps {
  socket: SocketState;
}

type UserProps = TOwnProps & TStateProps;

class User extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleClick() {
    this.setState({ visible: !this.state.visible });
  }

  challenge(user: string) {
    const { socket } = this.props;
    if (socket) {
      socket.emit(CHALLENGE, { user });
    }
  }

  render() {
    const { name } = this.props;
    return (
      <div className="card-panel User" onClick={() => this.handleClick()}>
        <div>{name}</div>
        <button
          className={`User__challenge btn waves-effect red lighten-1 ${
            this.state.visible ? "visible" : ""
          }`}
          onClick={() => this.challenge(name)}
        >
          Challenge!
        </button>
      </div>
    );
  }
}

const mapStatetoProps: MapStateToProps<TStateProps, null, RootState> = ({
  socket
}) => ({
  socket
});

export default connect(mapStatetoProps)(User);
