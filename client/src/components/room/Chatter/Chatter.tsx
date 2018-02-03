import { connect, MapStateToProps } from "react-redux";
import * as React from "react";

import { RoomMessagesState, RootState } from "../../../interfaces/states";
import Message from "../Message/Message";
import "./Chatter.css";

interface ChatterProps {
  roomMessages: RoomMessagesState;
}

class Chatter extends React.Component<ChatterProps, Object> {
  last: HTMLDivElement | null;

  constructor(props: ChatterProps) {
    super(props);
    this.setLastMessageRef = this.setLastMessageRef.bind(this);
  }

  componentDidUpdate() {
    this.scrollToLast();
  }

  scrollToLast() {
    if (this.last) {
      this.last.scrollIntoView({ behavior: "smooth" });
    }
  }

  setLastMessageRef(el: HTMLDivElement | null) {
    this.last = el;
  }

  renderMessages() {
    const last = this.props.roomMessages.length - 1;
    return this.props.roomMessages.map((msg, i) => {
      if (i === last) {
        return (
          <Message key={msg.id} {...msg} setRef={this.setLastMessageRef} />
        );
      } else {
        return <Message key={msg.id} {...msg} />;
      }
    });
  }

  render() {
    return (
      <div className="Chatter light-blue lighten-5 card-panel">
        {this.renderMessages()}
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<ChatterProps, null, RootState> = ({
  roomMessages
}) => ({ roomMessages });

export default connect(mapStateToProps)(Chatter);
