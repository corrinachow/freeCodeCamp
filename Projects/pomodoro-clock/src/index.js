import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Controls from './controls';
import IntervalSettings from './intervalcontrols';
import Time from './time';
import PomodoroStats from './pomodorostats'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phase: 'Start',
      timeRemaining: this.getTimeRemaining(1500000),//default 25 min
      timeElapsed: null,
      workTime: 1500000,
      restTime: 300000,
      count: 0
    }
    this.workIncrease = this.workIncrease.bind(this);
    this.workDecrease = this.workDecrease.bind(this);
    /*this.restIncrease = this.restIncrease.bind(this);
    this.restDecrease = this.restDecrease.bind(this);*/
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleStopTimer = this.handleStopTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.displayTime = this.displayTime.bind(this);
    this.getTimeRemaining = this.getTimeRemaining.bind(this);

  }

  workIncrease() {
    const {workTime}= this.state
    let timeRemaining = this.getTimeRemaining(
        this.state.timeRemaining.total + 60000
        );
    this.setState({ timeRemaining, workTime: timeRemaining.total });
    console.log(workTime)
  }

  workDecrease() {
    let timeRemaining = this.getTimeRemaining(
        this.state.timeRemaining.total - 60000
        );
    this.setState({ timeRemaining, workTime: timeRemaining.total });
  }

/*  restIncrease() {
    this.state.restInterval += 1;
    this.displayTime();
  }

  restDecrease() {
    this.state.restInterval -= 1;
    this.displayTime();
  }*/

  handleStartTimer() {
    const {phase} = this.state;
    this.setState(phase === 'Start' ? { phase: 'Pause' } : { phase:'Start' });
    phase === 'Start' ? this.startTimer() : this.pauseTimer();
  }

  handleStopTimer() {
    const { phase, workTime } = this.state;
    clearInterval(this.state.timeElapsed);
    this.setState({ timeElapsed: null, timeRemaining: this.getTimeRemaining(workTime), phase: 'Start' })
  }

  startTimer() {
    const {phase} = this.state;
    this.displayTime();
    if (phase === 'Start') {
      this.setState({timeElapsed: setInterval(this.displayTime, 1000)})
    }
  }

  pauseTimer() {
    clearInterval(this.state.timeElapsed);
  }

  displayTime() {
    //console.log(this.state.timeRemaining.total)
    if (this.state.timeRemaining.total > 0) {
      let timeRemaining = this.getTimeRemaining(
        this.state.timeRemaining.total - 1000
        );
      this.setState({ timeRemaining });
    }
  }

  getTimeRemaining(milliseconds) {
    const total = milliseconds,
      minutes = Math.floor(total / 1000 / 60 % 60),
      seconds = Math.floor(total / 1000 % 60) < 10
        ? '0' + Math.floor(total / 1000 % 60)
        : Math.floor(total / 1000 % 60);
    return { total, minutes, seconds };
  }


  render(){
    const workTimeMin = (this.state.workTime)/1000/60;
    const restTimeMin = (this.state.restTime)/1000/60;
    return (
    <div className="pomodoro-container">
      <Time time={this.state.timeRemaining}/>
      <IntervalSettings
      workTime={workTimeMin}
      deltaWork={this.changeWork}
      restTime={restTimeMin}
      handleWorkIncrease={this.workIncrease}
      handleWorkDecrease={this.workDecrease}
      /*handleRestIncrease={this.restIncrease}
      handleRestDecrease={this.restDecrease}*//>
      <Controls
      phase={this.state.phase}
      handleOnClickStart={this.handleStartTimer}
      handleOnClickStop={this.handleStopTimer}/>
      <PomodoroStats
      count={this.state.count}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
