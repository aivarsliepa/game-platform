import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import * as React from "react";

import {
  TicTacToeState,
  SocketState,
  RootState
} from "../../../interfaces/states";
import { actions } from "../../../interfaces/actions/rootAction";
import { TIC_TAC_TOE } from "../../../constants/events";
import Board from "../Board/Board";

interface TStateProps extends TicTacToeState {
  socket: SocketState;
}

interface TDispatchProps {
  move: (i: number) => void;
  init: () => void;
}

type TicTacToeGameProps = TDispatchProps & TStateProps;

class TicTacToeGame extends React.Component<TicTacToeGameProps, Object> {
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

  handleClick(index: number): void {
    const { fields, myMove } = this.props;
    if (
      !myMove ||
      fields[index] !== 0 ||
      this.calculateWinner(fields) !== null
    ) {
      return;
    }

    this.props.move(index);
    const { socket } = this.props;
    if (socket) {
      socket.emit(TIC_TAC_TOE, { index });
    }
  }

  render() {
    const winner = this.calculateWinner(this.props.fields);
    return (
      <div>
        <Board fields={this.props.fields} onClick={i => this.handleClick(i)} />
        {winner ? `Winner is ${this.props.side[winner]}` : ""}
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
> = dispatch => ({
  move: (index: number) => dispatch(actions.myMoveTicTacToeGame(index)),
  init: () => dispatch(actions.initTicTacToeGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeGame);
