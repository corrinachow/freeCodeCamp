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
      phase: 'Start',
      timeRemaining: this.getTimeRemaining(),
      workInterval: 25,
      restInterval: 5,

    }
    this.workIncrease = this.workIncrease.bind(this);
    this.workDecrease = this.workDecrease.bind(this);
    this.restIncrease = this.restIncrease.bind(this);
    this.restDecrease = this.restDecrease.bind(this);
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleStartTimer = this.handleStartTimer.bind(this);

  }

  workIncrease() {
    const {workInterval} = this.state;
    this.setState({workInterval: workInterval + 1})
  }

  workDecrease() {
    const {workInterval} = this.state;
    this.setState({workInterval: workInterval - 1})
  }

  restIncrease() {
    const {restInterval} = this.state;
    this.setState(restInterval === 60 ? {restInterval} : {restInterval: restInterval + 1})
    this.setState({restInterval: restInterval + 1})
  }

  restDecrease() {
    const {restInterval} = this.state;
    this.setState(restInterval === 1 ? {restInterval} : {restInterval: restInterval - 1})
  }

  handleStartTimer() {
    console.log('workTime: '+ this.props.workTime)
    const {phase} = this.state;
    console.log(phase)
    this.setState(phase === 'Start' ? {phase: 'Pause'} : {phase:'Start'});
    phase === 'Start' ? this.startTimer() : this.pauseTimer();
    this.displayTime();
  }

  handleStopTimer() {
    console.log('stop')
  }

  startTimer() {
    console.log('startTimer running')
    this.getTimeRemaining();
  }

  pauseTimer() {
    console.log('pauseTimer')
  }

  displayTime() {
    const { workTime, phase } = this.state;

    if ( phase === 'Start' ) {
      let timeRemaining = workTime
    } else {
      let timeRemaining = this.getTimeRemaining(1000)
      console.log(timeRemaining)
      this.setState({ timeRemaining })
    }
  }

  getTimeRemaining(milliseconds) {
    const minutes = Number(milliseconds)%60,
    seconds = 0 + '0';
    console.log(minutes)
    return { minutes, seconds }
  }

  render(){
    return (
    <div className="pomodoro-container">
      <Time time={this.state.timeRemaining}/>
      <IntervalSettings
      workInterval={this.state.workInterval}
      restInterval={this.state.restInterval}
      handleWorkIncrease={this.workIncrease}
      handleWorkDecrease={this.workDecrease}
      handleRestIncrease={this.restIncrease}
      handleRestDecrease={this.restDecrease}/>
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
