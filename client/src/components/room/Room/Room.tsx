import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import * as React from "react";

import {
  ChallengeState,
  RootState,
  SocketState,
  OpponentsState
} from "../../../interfaces/states";
import { actions } from "../../../interfaces/actions/rootAction";
import { CHALLENGE_ACCEPTED } from "../../../constants/events";
import NewMessageForm from "../NewMessageForm/NewMessageForm";
import Chatter from "../Chatter/Chatter";
import SideBar from "../SideBar/SideBar";
import Modal from "../Modal/Modal";
import "./Room.css";
import { Opponent } from "../../../interfaces/general";

interface TStateProps {
  challenge: ChallengeState;
  socket: SocketState;
}

interface TDispatchProps {
  removeChallenger: () => void;
  newOpponents: (opponents: OpponentsState) => void;
}

interface Params {
  room: string;
}

interface RoomState {
  room: string;
}

type RoomProps = TStateProps & TDispatchProps & RouteComponentProps<Params>;

class Room extends React.Component<RoomProps, RoomState> {
  constructor(props: RoomProps) {
    super(props);
    this.state = { room: "" };
    this.rejectChallenge = this.rejectChallenge.bind(this);
    this.acceptChallenge = this.acceptChallenge.bind(this);
  }

  componentDidMount() {
    this.setState({ room: this.props.match.params.room });
  }

  rejectChallenge() {
    this.props.removeChallenger();
  }

  acceptChallenge() {
    const { socket, challenge } = this.props;
    if (socket && challenge) {
      socket.emit(CHALLENGE_ACCEPTED, challenge);
      // TODO think of a better way, ie, extract this from component
      const opponent: Opponent = {
        user: challenge.user,
        firstMove: false
      };
      this.props.newOpponents([opponent]);
      this.props.removeChallenger();
      this.props.history.push(`/game/${this.state.room}`);
    }
  }

  renderChallengerModalContent() {
    const { challenge } = this.props;
    if (!challenge) {
      return null;
    }

    return (
      <div className="card-content">
        <div className="card-title center">
          {challenge.user} has challenged you to a {this.state.room} game!
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
        <SideBar room={this.state.room} />
        <Chatter />
        <NewMessageForm />
        <Modal show={showModal}>{this.renderChallengerModalContent()}</Modal>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<TStateProps, null, RootState> = ({
  challenge,
  socket
}) => ({
  challenge,
  socket
});

const mapDispatchToProps: MapDispatchToProps<
  TDispatchProps,
  null
> = dispatch => ({
  newOpponents: opponents => dispatch(actions.newOpponents(opponents)),
  removeChallenger: () => dispatch(actions.removeChallenger())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Room));
