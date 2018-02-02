import * as React from "react";

import { ChallengerState } from "../../../interfaces/states";
import "./Modal.css";

interface ModalProps {
  readonly show: boolean;
  readonly challenger: ChallengerState;
}

class Modal extends React.Component<ModalProps, Object> {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="Modal__background">
        <div className="Modal__content">
          Hello there, {this.props.challenger}!
        </div>
      </div>
    );
  }
}

export default Modal;
