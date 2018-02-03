import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import * as React from "react";

import {
  ChallengeState,
  RootState,
  RoomState,
  SocketState,
  OpponentsState
} from "../../../interfaces/states";
import NewMessageForm from "../NewMessageForm/NewMessageForm";
import { CHALLENGE_ACCEPTED } from "../../../constants/events";
import { removeChallenger, newOpponents } from "../../../actions/creators";
import Chatter from "../Chatter/Chatter";
import SideBar from "../SideBar/SideBar";
import Modal from "../Modal/Modal";
import "./Room.css";

interface TStateProps {
  challenge: ChallengeState;
  socket: SocketState;
  room: RoomState;
}

interface TDispatchProps {
  removeChallenger: () => void;
  newOpponents: (opponents: OpponentsState) => void;
}

type RoomProps = TStateProps & TDispatchProps;

class Room extends React.Component<RoomProps, Object> {
  constructor(props: RoomProps) {
    super(props);
    this.rejectChallenge = this.rejectChallenge.bind(this);
    this.acceptChallenge = this.acceptChallenge.bind(this);
  }
  rejectChallenge() {
    this.props.removeChallenger();
  }

  acceptChallenge() {
    const { socket, challenge } = this.props;
    if (socket && challenge) {
      socket.emit(CHALLENGE_ACCEPTED, challenge);
      this.props.newOpponents([challenge.user]);
      this.props.removeChallenger();
    }
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
          <button className="btn waves-effect" onClick={this.acceptChallenge}>
            Accept
          </button>
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
  newOpponents: opponents => dispatch(newOpponents(opponents)),
  removeChallenger: () => dispatch(removeChallenger())
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
