import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
      player1: null,
      player2: null,
      turn: 'O',
      board: ['', '', '', '', '', '', '', '', ''],
  }
  this.initialState = this.state;
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(square) {
    const { turn, board } = this.state;



    if (board[square - 1] === 'X' || board[square - 1] === 'O') {
      console.log('pick another')
    } else {
      board.splice(square - 1, 1, turn);
      this.setState(turn === 'O' ? { turn: 'X' } : { turn :'O' });
    }

  }

  checkWin() {
    const { board } = this.state;
    winCombos.forEach(combo => {

    })
  }




  render() {
    return(
      <div className="board">
        <button value="1" onClick={() => this.handleClick(1)}>{this.state.board[0]}</button>
        <button value="2" onClick={() => this.handleClick(2)}>{this.state.board[1]}</button>
        <button value="3" onClick={() => this.handleClick(3)}>{this.state.board[2]}</button>
        <button value="4" onClick={() => this.handleClick(4)}>{this.state.board[3]}</button>
        <button value="5" onClick={() => this.handleClick(5)}>{this.state.board[4]}</button>
        <button value="6" onClick={() => this.handleClick(6)}>{this.state.board[5]}</button>
        <button value="7" onClick={() => this.handleClick(7)}>{this.state.board[6]}</button>
        <button value="8" onClick={() => this.handleClick(8)}>{this.state.board[7]}</button>
        <button value="9" onClick={() => this.handleClick(9)}>{this.state.board[8]}</button>
      </div>
      );
  }
}

ReactDOM.render(<Board />, document.getElementById('root'));
