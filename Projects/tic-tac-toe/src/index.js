import React from 'react';
import ReactDOM from 'react-dom';
import Players from './js/settings';
import Tokens from './js/tokens';
import './css/index.css';

const winCombos = [
[1, 2, 3], //first row across
[4, 5, 6], //second row across
[7, 8, 9], // third row across
[1, 4, 7], //first row down
[2, 5, 8], //second row down
[3, 6, 9], //third row row down
[1, 5, 9], //diagonal
[3, 5, 7], //diagonal
]


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    humans: null,
      player1Token: 'O',
      turn: 'O',
      board: [],
      status: null
  };

    this.handleClick = this.handleClick.bind(this);
    this.handlePlayers = this.handlePlayers.bind(this);
    this.handleTokens = this.handleTokens.bind(this)

  }

  handlePlayers(players) {
    this.setState({humans: players.target.value});
  }

  handleTokens(token) {
    this.setState({player1Token: token.target.value});
  }

  handleClick(square) {
    const { turn, board } = this.state;

    if (board[square - 1] === 'X' || board[square - 1] === 'O') {
      console.log('pick another')
    } else {
      board[square - 1] = turn;
      this.setState({turn: turn === 'O' ? 'X' : 'O' , board});
    }
    this.checkWin();
  }

  checkWin() {
    const { board } = this.state;

    winCombos.forEach(combo => {
      let countX = 0;
      let countO = 0;
      combo.forEach(box => {
        if (board[box - 1] === 'X') {
          countX += 1;
        } if (board[box - 1] === 'O') {
          countO += 1;
        }
      });
      if (countX === 3) {
        this.setState({status: 'X wins'})
      } if (countO === 3) {
        this.setState({status: 'O wins'})
      }
      if (board.length === 0) {
        this.setState({status: 'tie'})
      }
    });
  }

  handleReset() {
    this.setState({
    humans: null, player1Token: 'O', turn: 'O', board: [], status: null });
  };



  render() {
    return(
      <div className="game">
      <Players numPlayers={this.handlePlayers} />
      <Tokens playerToken={this.handleTokens}/>
        <div className="board">
          <button onClick={() => this.handleClick(1)}>{this.state.board[0]}</button>
          <button onClick={() => this.handleClick(2)}>{this.state.board[1]}</button>
          <button onClick={() => this.handleClick(3)}>{this.state.board[2]}</button>
          <button onClick={() => this.handleClick(4)}>{this.state.board[3]}</button>
          <button onClick={() => this.handleClick(5)}>{this.state.board[4]}</button>
          <button onClick={() => this.handleClick(6)}>{this.state.board[5]}</button>
          <button onClick={() => this.handleClick(7)}>{this.state.board[6]}</button>
          <button onClick={() => this.handleClick(8)}>{this.state.board[7]}</button>
          <button onClick={() => this.handleClick(9)}>{this.state.board[8]}</button>
          <p>{this.state.status}</p>
          <button onClick={() => this.handleReset()}>Reset</button>
        </div>
      </div>
      );
  }
}

ReactDOM.render(<Board />, document.getElementById('root'));
