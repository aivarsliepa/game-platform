import * as React from "react";
import { Component } from "react";

import "./Field.css";
const cross = require("./cross.svg");
const circle = require("./circle.svg");

export interface FieldProps {
  value: number;
  onClick: () => void;
}

class Field extends Component<FieldProps, Object> {
  renderField() {
    if (this.props.value > 0) {
      const src = this.props.value === 1 ? cross : circle;
      return <img width={50} height={50} src={src} />;
    }
    return "";
  }
  render() {
    return (
      <div className="Field" onClick={() => this.props.onClick()}>
        {this.renderField()}
      </div>
    );
  }
}

export default Field;
