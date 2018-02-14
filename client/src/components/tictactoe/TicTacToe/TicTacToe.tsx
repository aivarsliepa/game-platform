import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import * as React from "react";

import {
  TicTacToeState,
  SocketState,
  RootState
} from "../../../interfaces/states";
import { TIC_TAC_TOE, TIC_TAC_TOE_AGAIN } from "../../../constants/events";
import { actions } from "../../../interfaces/actions/rootAction";
import Board from "../Board/Board";

interface TStateProps extends TicTacToeState {
  readonly socket: SocketState;
  readonly winner: number;
}

interface TDispatchProps {
  move: (i: number) => void;
  init: () => void;
}

type TicTacToeGameProps = TDispatchProps & TStateProps;

class TicTacToeGame extends React.Component<TicTacToeGameProps, Object> {
  constructor(props: TicTacToeGameProps) {
    super(props);
    this.handlePlayAgain = this.handlePlayAgain.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.init();
  }

  handleClick(index: number): void {
    const { fields, myMove, winner } = this.props;
    if (!myMove || fields[index] !== 0 || winner !== -1) {
      return;
    }

    this.props.move(index);
    const { socket } = this.props;
    if (socket) {
      socket.emit(TIC_TAC_TOE, { index });
    }
  }

  handlePlayAgain(): void {
    const { socket } = this.props;
    if (socket) {
      socket.emit(TIC_TAC_TOE_AGAIN);
    }
  }

  renderInfo() {
    const { myMove, opponent, side, winner } = this.props;

    switch (winner) {
      case 0:
        return "It's a TIE!";
      case 1:
      case 2:
        return `Winner: ${side[winner]}`;
      default:
        return `Next move: ${myMove ? "YOU" : opponent}`;
    }
  }

  render() {
    const { fields, winner } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <div className="light-blue-text darken-4">{this.renderInfo()}</div>
        <Board fields={fields} onClick={i => this.handleClick(i)} />
        {winner !== -1 && (
          <button
            className="waves-effect waves-light btn"
            onClick={() => this.handlePlayAgain()}
          >
            Play again
          </button>
        )}
      </div>
    );
  }
}

function calculateWinner(fields: number[]): number {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let result = -1;
  winningLines.forEach(line => {
    const [a, b, c] = line;
    if (fields[a] !== 0 && fields[a] === fields[b] && fields[a] === fields[c]) {
      result = fields[a];
    }
  });

  if (result === -1) {
    result = fields.indexOf(0) > -1 ? -1 : 0;
  }

  return result;
}

const mapStateToProps: MapStateToProps<TStateProps, null, RootState> = ({
  tictactoe: { fields, myMove, opponent, side },
  socket
}) => ({
  winner: calculateWinner(fields),
  opponent,
  fields,
  myMove,
  side,
  socket
});

const mapDispatchToProps: MapDispatchToProps<
  TDispatchProps,
  null
> = dispatch => ({
  move: (index: number) => dispatch(actions.myMoveTicTacToeGame(index)),
  init: () => dispatch(actions.initTicTacToeGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeGame);
