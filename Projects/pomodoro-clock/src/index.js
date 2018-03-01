import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Controls from './controls';
import IntervalSettings from './intervalcontrols';
import Time from './time';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workTime: props.workInterval,
      phase: 'Start',
     // timeRemaining:
    }

    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handlePauseTimer = this.handlePauseTimer.bind(this);
  }

  handleStartTimer() {
    const {phase} = this.state;
    console.log(phase)
    this.setState(phase === 'Start' ? {phase: 'Pause'} : {phase:'Start'});
    this.startTimer();
  }

  handleStopTimer() {
    console.log('stop')
  }

  handlePauseTimer() {
    console.log('pause')
  }

  startTimer() {
    console.log('startTimer running')
  }

  getTimeRemaining() {
    const minutes = 25,
    seconds = 0;
    return {minutes, seconds}
  }

  render(){
    return (
    <div className="pomodoro-container">
      <Time/>
      <IntervalSettings/>
      <Controls
      phase={this.state.phase}
      handleOnClickStart={this.handleStartTimer}
      handleOnClickPause={this.handlePauseTimer}
      handleOnClickStop={this.handleStopTimer}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
