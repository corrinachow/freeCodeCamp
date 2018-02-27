import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
  state = {
    value: null,
    displayValue: '0',
    waitingForOperand: false,
    operator: null,
    displayEquation: '0',
    temp: ''
  };

  inputDigit(digit) {
    const { displayValue, waitingForOperand, displayEquation } = this.state;

    if (waitingForOperand) {
      this.setState ({
        displayEquation: displayEquation.includes('=') ? String(digit) : displayEquation + String(digit),
        displayValue: String(digit),
        waitingForOperand: false,
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit,
        displayEquation: displayEquation === '0' ? String(digit) : displayEquation + digit,
      })
    }
  }

  inputDot() {
    const { displayValue, waitingForOperand, displayEquation } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: '.',
        displayEquation: displayEquation + '.',
        waitingForOperand: false
      })
    } else if(displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: displayValue + '.',
        displayEquation: displayEquation + '.',
        waitingForOperand: false
      })
    }
  }

  allClear() {
    this.setState({
      value: null,
      displayValue: '0',
      waitingForOperand: false,
      operator: null,
      displayEquation: '0',
      temp: ''
    })
  }

  clearEntry(){
    const { value } = this.state;

    this.setState({
      displayValue: '0',
      displayEquation: value ? value : '0',
      operator: null
    });
  }

  toggleSign() {
    const { displayValue, displayEquation, waitingForOperand } = this.state

    if (displayValue === '0' || displayEquation.includes('char') || waitingForOperand) {
    } else {
      this.setState({
        displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue,
        displayEquation: displayValue.charAt(0) === '-' ? displayEquation.length > displayValue.length ? displayEquation.slice(0, -(displayValue.length + 2)) + displayValue.substr(1) : displayValue.substr(1) : displayEquation.slice(0, -displayValue.length) + '(-' + displayValue + ')',
      })
    }
  }

  inputPercent() {
    const { displayValue, displayEquation } = this.state
    const value = parseFloat(displayValue)/100;
    const displayIndex = displayEquation.slice(0, displayEquation.indexOf(displayValue))

    if (displayEquation.includes('char')) {
    } else {
      this.setState({
        displayValue: String(value),
        displayEquation: displayEquation.includes(')') ? displayIndex + String(value) + ')' : displayIndex + String(value)
      })
    }
  }

  performOperation(nextOperator) {
    const { displayValue, operator, value, displayEquation, waitingForOperand } = this.state;
    const nextValue = parseFloat(displayValue);

    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '=': (prevValue, nextValue) => nextValue
    };

    if (value == null) {
      this.setState({
        value: nextValue,
        displayEquation: nextOperator === '=' ? displayEquation : displayEquation + nextOperator,
      })
    } else if (operator && !waitingForOperand) {
      const currentValue = value || 0;
      const computedValue = operations[operator](currentValue, nextValue);
      this.setState({
        value: computedValue,
        displayValue: computedValue,
        displayEquation: nextOperator === '=' ? displayEquation + nextOperator :computedValue + nextOperator
      })
    } else {
      this.setState({
        displayEquation: /[+-/*]$/.test(displayEquation) ? displayEquation.replace(/[+-/*=]$/, nextOperator) : displayEquation.includes('=') ? value + nextOperator : displayEquation + nextOperator,
        value: displayValue,
      });
    }
    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }

  render() {
    const {displayValue, displayEquation} = this.state
    return (
      <div className="calculator">
        <div className="calculator-display">{displayEquation}</div>
        <div className="answer-row">
          <div className="calculator-display">{displayValue}</div>
        </div>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="button-row button-row-1" >
              <button className="calculator-key key-AC" onClick={() => this.allClear()}>AC</button>
              <button className="calculator-key key-CE" onClick={() => this.clearEntry()}>CE</button>
              <button className="calculator-key key-sign" onClick={() => this.toggleSign()}>±</button>
              <button className="calculator-key key-percent" onClick={() => this.inputPercent()}>%</button>
            </div>
            <div className="button-row">
              <button className="calculator-key key-7" onClick={() => this.inputDigit(7)}>7</button>
              <button className="calculator-key key-8" onClick={() => this.inputDigit(8)}>8</button>
              <button className="calculator-key key-9" onClick={() => this.inputDigit(9)}>9</button>
              <button className="calculator-key key-add" onClick={() => this.performOperation('+')}>+</button>
            </div>
            <div className="button-row">
              <button className="calculator-key key-6" onClick={() => this.inputDigit(6)}>6</button>
              <button className="calculator-key key-5" onClick={() => this.inputDigit(5)}>5</button>
              <button className="calculator-key key-4" onClick={() => this.inputDigit(4)}>4</button>
              <button className="calculator-key key-subtract" onClick={() => this.performOperation('-')}>−</button>
            </div>
            <div className="button-row">
              <button className="calculator-key key-1" onClick={() => this.inputDigit(1)}>1</button>
              <button className="calculator-key key-2" onClick={() => this.inputDigit(2)}>2</button>
              <button className="calculator-key key-3" onClick={() => this.inputDigit(3)}>3</button>
              <button className="calculator-key key-multiply" onClick={() => this.performOperation('*')}>×</button>
            </div>
            <div className="button-row">
              <button className="calculator-key key-dot" onClick={() => this.inputDot()}>.</button>
              <button className="calculator-key key-0" onClick={() => this.inputDigit(0)}>0</button>
              <button className="calculator-key key-equals"onClick={() => this.performOperation('=')}>=</button>
              <button className="calculator-key key-divide" onClick={() => this.performOperation('/')}>÷</button>
            </div>
            </div>
          </div>
        </div>

        )
  }
}

// ========================================

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
