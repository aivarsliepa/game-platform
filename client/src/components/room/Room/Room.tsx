import * as React from "react";

import Chatter from "../Chatter/Chatter";
import SideBar from "../SideBar/SideBar";
import NewMessageForm from "../NewMessageForm/NewMessageForm";
import "./Room.css";
import { ChallengerState, RootState } from "../../../interfaces/states";
import { connect } from "react-redux";
import Modal from "../Modal/Modal";

interface RoomProps {
  challenger: ChallengerState;
}

class Room extends React.Component<RoomProps, Object> {
  render() {
    const { challenger } = this.props;
    const showModal = challenger !== null;

    return (
      <div className="Room">
        <SideBar />
        <Chatter />
        <NewMessageForm />
        <Modal show={showModal} challenger={challenger} />
      </div>
    );
  }
}

const mapStateToProps = ({ challenger }: RootState) => ({ challenger });

export default connect(mapStateToProps, null)(Room);
