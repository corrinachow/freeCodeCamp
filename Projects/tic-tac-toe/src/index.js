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
    player1Token: '',
    player2Token: '',
    turn: 'O',
    board: [],
    gameInProgress: false,
    winner: null,
  };
    this.handleClick = this.handleClick.bind(this);
    this.handlePlayers = this.handlePlayers.bind(this);
    this.handleTokens = this.handleTokens.bind(this)
  }

  handlePlayers(players) {
    this.setState({humans: players.target.value});
  }

  handleTokens(token) {
    this.setState({
      player1Token: token.target.value,
      player2Token: token.target.value === 'O' ? 'X' : 'O',
      turn: token.target.value});
  }

  toggleStart() {
    this.setState({ gameInProgress: this.state.gameInProgress ? false : true });
  }

  handleClick(square) {
    const { turn, board, humans, player1Token, player2Token, gameInProgress, winner } = this.state;
    if (gameInProgress) {
        if (board[square - 1] === 'X' || board[square - 1] === 'O' || winner) {
            console.log('TRY AGAIN')
        } else {
            board[square - 1] = turn;
            if (humans === '2') {
                this.setState({ turn: turn === 'X' ? 'O' : 'X' })
            } else if (humans === '1') {
                this.computerMove();
                this.setState({ turn: turn === 'X' ? 'X' : 'O' })
            }
        }
    }
    this.checkWin();
  }


  computerMove() {
    const { board, player1Token, player2Token , turn } = this.state;
    let possibleMoves = []

    winCombos.forEach(combo => {
      let count = 0;

      combo.forEach(box => {
        if (board[box - 1] === player2Token) {
          count ++
        }
        if (board[box - 1] != player1Token && board[box - 1] === undefined) {
          if (!possibleMoves.includes(box)) {
            possibleMoves.push(box);
          }
        }
      });
    });
    let newMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    board[newMove - 1] = player2Token;
    this.setState({turn: turn === 'X' ? 'X' : 'O'});
    this.checkWin();
  }

  checkWin() {
    const { board, winner } = this.state;

    let boardStats = []

    winCombos.forEach(combo => {
      let countX = 0;
      let countO = 0;
      combo.forEach(box => {
        if (board[box - 1] === 'X') {
          countX += 1;
          if (countX == 3) {
          this.setState({winner: 'X wins'})
          setTimeout(() => this.playAgain(), 3000);
        }
      } if (board[box - 1] === 'O') {
          countO += 1;
          if (countO == 3) {
          this.setState({winner: 'O wins'});
          setTimeout(() => this.playAgain(), 3000);
        }
        }
      });
      boardStats.push(countX);
      boardStats.push(countO);
    });
    this.checkDraw(boardStats);
  }

  checkDraw(currentBoard) {
    if (!currentBoard.includes(0)) {
      this.setState({winner: 'Tie'});
      setTimeout(() => this.playAgain(), 3000);
    }
  }

  playAgain () {
    this.setState({board: [], winner: null})
  }

  handleReset() {
    this.setState({gameInProgress: false, player1Token: 'O', player2Token: 'X', turn: 'O', board: [], winner: null });
  };



  render() {
    const toggleTokenVisiblity = {visibility: this.state.humans ? 'visible' : 'hidden', opacity: this.state.humans ? '1' : '0'};
    const toggleStartVisibility = {visibility: this.state.player1Token ? 'visible' : 'hidden', opacity: this.state.player1Token ? '1' : '0'};
    const toggleBoardVisibility = {visibility: this.state.gameInProgress ? 'visible' : 'hidden', opacity: this.state.gameInProgress ? '1' : '0'};
    return(
      <div className="game">
      <Players numPlayers={this.handlePlayers}/>
      <Tokens playerToken={this.handleTokens} tokenVisibility={toggleTokenVisiblity}/>
      <button style={toggleStartVisibility} onClick={this.toggleStart.bind(this)}>Start</button>
        <div className="board" style={toggleBoardVisibility}>
          <button onClick={() => this.handleClick(1)}>{this.state.board[0]}</button>
          <button onClick={() => this.handleClick(2)}>{this.state.board[1]}</button>
          <button onClick={() => this.handleClick(3)}>{this.state.board[2]}</button>
          <button onClick={() => this.handleClick(4)}>{this.state.board[3]}</button>
          <button onClick={() => this.handleClick(5)}>{this.state.board[4]}</button>
          <button onClick={() => this.handleClick(6)}>{this.state.board[5]}</button>
          <button onClick={() => this.handleClick(7)}>{this.state.board[6]}</button>
          <button onClick={() => this.handleClick(8)}>{this.state.board[7]}</button>
          <button onClick={() => this.handleClick(9)}>{this.state.board[8]}</button>
        </div>
        <div>
          <p>{this.state.winner}</p>
        </div>
        <button onClick={() => this.handleReset()}>Reset All</button>
      </div>
      );
  }
}

ReactDOM.render(<Board />, document.getElementById('root'));
