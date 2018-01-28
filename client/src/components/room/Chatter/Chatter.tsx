import * as React from "react";
import { connect } from "react-redux";

import "./Chatter.css";
import Message from "../Message/Message";
import { RoomMessagesState, RootState } from "../../../interfaces/states";

interface ChatterProps {
  roomMessages: RoomMessagesState;
}

const Chatter = ({ roomMessages }: ChatterProps) => {
  return (
    <div className="Chatter light-blue lighten-5 card-panel">
      {roomMessages.map(msg => <Message key={msg.id} {...msg} />)}
    </div>
  );
};

function mapStateToProps({ roomMessages }: RootState): ChatterProps {
  return { roomMessages };
}

export default connect(mapStateToProps)(Chatter);
