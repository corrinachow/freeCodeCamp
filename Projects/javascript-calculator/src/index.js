import React from 'react';
import ReactDOM from 'react-dom';
import math from 'mathjs'
import './index.css';

class Frame extends React.Component {
  constructor() {
    super();
    //set default state
    this.state = {
      operation: [],
      equation: '',
      answer: '',
      temp: null
    }
    //bind handleClick method to buttons
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className='frame'>
        <div className='calculator-title'>
          Calculator
        </div>
        <Screen equation={this.state.equation} answer={this.state.answer}/>
        <div className='button-row'>
          <Button label='1' handleClick={this.handleClick} type='digit' />
          <Button label='2' handleClick={this.handleClick} type='digit' />
          <Button label='3' handleClick={this.handleClick} type='digit' />
          <Button label='+' handleClick={this.handleClick} type='operator' />
        </div>
        <div className='button-row'>
          <Button label='4' handleClick={this.handleClick} type='digit' />
          <Button label='5' handleClick={this.handleClick} type='digit' />
          <Button label='6' handleClick={this.handleClick} type='digit' />
          <Button label='-' handleClick={this.handleClick} type='operator' />
        </div>
        <div className='button-row'>
          <Button label='7' handleClick={this.handleClick} type='digit' />
          <Button label='8' handleClick={this.handleClick} type='digit' />
          <Button label='9' handleClick={this.handleClick} type='digit' />
          <Button label={'*'} handleClick={this.handleClick} type='operator' />
        </div>
        <div className='button-row'>
          <Button label='C' handleClick={this.handleClick} type='clear' />
          <Button label='0' handleClick={this.handleClick} type='digit' />
          <Button label='=' handleClick={this.handleClick} type='equals' />
          <Button label='/' handleClick={this.handleClick} type='operator'/>
        </div>
      </div>
    );
  }

  //handle click events from buttons
  handleClick(e) {
    const value = e.target.value; //Gets value from target element
    const buttonClass = e.target.className;

    switch (buttonClass) {
      case 'clear' :
      this.setState(this.state);
      break;
      case 'equals' :
      let answer = math.eval(this.state.equation);
      this.setState({ answer, temp: answer, equation: ''});
      break;
      case 'digit' :
      this.setState({ equation: this.state.equation += value, temp: null });
      break;
      case 'operator' :
      this.setState(parseInt(this.state.temp) ? {equation: this.state.temp += value, temp: null} :
      this.setState(/\d\D$/g.test(this.state.equation) ? {equation: this.state.equation.replace(/.$/ , value)} :
        {equation : this.state.equation += value, lastOp: value}));
    }
  }
}

//screenRow is written as a functional component
//it receives displays (in an input field) a props (property) of value from its parent component
const ScreenRow = (props) => {
  return (
    <div className='screen-row'>
      <input type='text' readOnly value={props.value}/>
    </div>
  );
}

const Button = (props) => {
  return (
    <input
      type='button'
      className={props.type}
      onClick={props.handleClick}
      value={props.label}
    />
  );
}

//the Screen components displays two screen rows, 1 is the equation, 2 is the answer
const Screen = (props) => {
  return (
    <div className="screen">
      <ScreenRow value={props.equation}/>
      <ScreenRow value={props.answer}/>
    </div>
  );
}

// ========================================

ReactDOM.render(
  <Frame />,
  document.getElementById('root')
);
