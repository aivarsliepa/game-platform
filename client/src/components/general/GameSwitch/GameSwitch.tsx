import { RouteComponentProps, withRouter } from "react-router";
import * as React from "react";

import TicTacToe from "../../tictactoe/TicTacToe/TicTacToe";
import StartPage from "../StartPage/StartPage";

interface Params {
  game: string;
}
class GameSwitch extends React.Component<RouteComponentProps<Params>, Object> {
  render() {
    const { game } = this.props.match.params;

    switch (game) {
      case "TicTacToe":
        return <TicTacToe />;
      default:
        return <StartPage />;
    }
  }
}

export default withRouter(GameSwitch);
