import * as React from "react";

import Field from "../Field/Field";
import "./Board.css";

export interface BoardProps {
  fields: number[];
  onClick: (i: number) => void;
}
class Board extends React.Component<BoardProps, Object> {
  renderFields() {
    return this.props.fields.map((field, i) => {
      return (
        <Field key={i} value={field} onClick={() => this.props.onClick(i)} />
      );
    });
  }
  render() {
    return <div className="Board">{this.renderFields()}</div>;
  }
}

export default Board;
