import * as React from "react";

import Chatter from "../Chatter/Chatter";
import SideBar from "../SideBar/SideBar";
import NewMessageForm from "../NewMessageForm/NewMessageForm";
import "./Room.css";
import {
  ChallengeState,
  RootState,
  RoomState,
  SocketState
} from "../../../interfaces/states";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import Modal from "../Modal/Modal";
import { rejectChallenger } from "../../../actions/creators";

interface TStateProps {
  challenge: ChallengeState;
  socket: SocketState;
  room: RoomState;
}

interface TDispatchProps {
  reject: () => void;
}

type RoomProps = TStateProps & TDispatchProps;

class Room extends React.Component<RoomProps, Object> {
  constructor(props: RoomProps) {
    super(props);
    this.rejectChallenge = this.rejectChallenge.bind(this);
  }
  rejectChallenge() {
    this.props.reject();
  }

  renderChallengerModalContent() {
    const { challenge, room } = this.props;
    if (!challenge) {
      return null;
    }

    return (
      <div className="card-content">
        <div className="card-title center">
          {challenge.user} has challenged you to a {room} game!
        </div>
        <div className="Modal__buttons">
          <button className="btn waves-effect">Accept</button>
          <button
            className="btn waves-effect red lighten-1"
            onClick={this.rejectChallenge}
          >
            Reject
          </button>
        </div>
      </div>
    );
  }

  render() {
    const showModal = this.props.challenge !== null;

    return (
      <div className="Room">
        <SideBar />
        <Chatter />
        <NewMessageForm />
        <Modal show={showModal}>{this.renderChallengerModalContent()}</Modal>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<TStateProps, null, RootState> = ({
  challenge,
  room,
  socket
}) => ({
  challenge,
  socket,
  room
});

const mapDispatchToProps: MapDispatchToProps<
  TDispatchProps,
  null
> = dispatch => ({
  reject: () => dispatch(rejectChallenger())
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
