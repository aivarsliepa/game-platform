import * as React from "react";
import { connect } from "react-redux";

import { RoomMessagesState } from "../../../reducers/roomMessages/roomMessagesReducer";
import "./Chatter.css";
import { RootState } from "../../../reducers/index";
import Message from "../Message/Message";

interface ChatterProps {
  roomMessages: RoomMessagesState;
}

const Chatter = ({ roomMessages }: ChatterProps) => {
  return (
    <div className="Chatter light-blue lighten-5 card-panel">
      {roomMessages.map(msg => <Message key={msg.from + msg.time} {...msg} />)}
    </div>
  );
};

function mapStateToProps({ roomMessages }: RootState): ChatterProps {
  return { roomMessages };
}

export default connect(mapStateToProps)(Chatter);
