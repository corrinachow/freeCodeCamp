import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Frame extends React.Component {
  constructor() {
    super();
    //set default state
    this.state = {
      equation: '',
      answer: '',
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
          <Button label={'('} handleClick={this.handleClick} type='input' />
          <Button label={')'} handleClick={this.handleClick} type='input' />
          <Button label={'%'} handleClick={this.handleClick} type='action' />
          <Button label={'C'} handleClick={this.handleClick} type='input' />
        </div>
        <div className='button-row'>
          <Button label={'1'} handleClick={this.handleClick} type='input' />
          <Button label={'2'} handleClick={this.handleClick} type='input' />
          <Button label={'3'} handleClick={this.handleClick} type='input' />
          <Button label={'+'} handleClick={this.handleClick} type='action' />
        </div>
        <div className='button-row'>
          <Button label={'4'} handleClick={this.handleClick} type='input' />
          <Button label={'5'} handleClick={this.handleClick} type='input' />
          <Button label={'6'} handleClick={this.handleClick} type='input' />
          <Button label={'-'} handleClick={this.handleClick} type='action' />
        </div>
        <div className='button-row'>
          <Button label={'7'} handleClick={this.handleClick} type='input' />
          <Button label={'8'} handleClick={this.handleClick} type='input' />
          <Button label={'9'} handleClick={this.handleClick} type='input' />
          <Button label={'*'} handleClick={this.handleClick} type='action' />
        </div>
        <div className='button-row'>
          <Button label={'.'} handleClick={this.handleClick} type='input' />
          <Button label={'0'} handleClick={this.handleClick} type='input' />
          <Button label={'='} handleClick={this.handleClick} type='equals' />
          <Button label={'/'} handleClick={this.handleClick} type='action'/>
        </div>
      </div>
    );
  }

  //handle click events from buttons
  handleClick(event) {
    const value = event.target.value //gets value from target element
    //const lastChar = (this.state.equation).charAt((this.state.equation).length - 1)
    console.log(this.state.equation)
    console.log(value)
    //console.log(this.state.equation)

  switch(true) {
    case value === 'C' :
      this.setState({ equation: '', answer: ''});
      break;
    case (event.target.className.includes('input')) :
      this.setState({ equation: this.state.equation += value});
    case (/\d\D$/g.test(this.state.equation)) :
      this.setState({equation: this.state.equation.replace(/.$/ , value)})
      break;
    case '=' : //if it's an equal sign, evaluate the string}
      const answer = eval(this.state.equation).toString();
      this.setState({ answer, equation:'' });
      break;
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
      className={props.type === 'action' ? 'button action-button' : 'button input-button'}
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
