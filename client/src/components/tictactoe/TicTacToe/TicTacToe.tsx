import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import * as React from "react";

import {
  TicTacToeState,
  SocketState,
  RootState
} from "../../../interfaces/states";
import { actions } from "../../../interfaces/actions/rootAction";
import Board from "../Board/Board";

interface TStateProps extends TicTacToeState {
  socket: SocketState;
}

interface TDispatchProps {
  init: () => void;
}

type TicTacToeGameProps = TDispatchProps & TStateProps;

class TicTacToeGame extends React.Component<TicTacToeGameProps, Object> {
  private next: number = 1;
  constructor(props: TicTacToeGameProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.init();
  }

  calculateWinner(squares: number[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] !== 0 &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  handleClick(i: number): void {
    const fields = this.props.fields.slice();
    if (
      (!this.props.myMove && fields[i] !== 0) ||
      this.calculateWinner(fields) !== null
    ) {
      return;
    }

    // todo dispatch and emit socket
    fields[i] = this.next;
    this.setState({ fields });
    this.next = this.next === 1 ? 2 : 1;
  }

  render() {
    const winner = this.calculateWinner(this.props.fields);
    return (
      <div>
        <Board fields={this.props.fields} onClick={i => this.handleClick(i)} />
        {winner ? `Winner is ${this.props.fields[winner]}` : ""}
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<TStateProps, null, RootState> = ({
  tictactoe: { fields, myMove, opponent, side },
  socket
}) => ({ fields, myMove, opponent, side, socket });

const mapDispatchToProps: MapDispatchToProps<
  TDispatchProps,
  null
> = dispatch => ({ init: () => dispatch(actions.initTicTacToeGame()) });

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeGame);
