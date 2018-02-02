import * as React from "react";

import "./Modal.css";

interface ModalProps {
  readonly show: boolean;
}
class Modal extends React.Component<ModalProps, Object> {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="Modal__background">
        <div className="Modal__content card">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
