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
      phase: false,
      status: 'Start',
      timeRemaining: this.getTimeRemaining(2000),//default 25 min
      timeElapsed: null,
      workTime: 1500000,
      restTime: 300000,
      longRest: 0,
      count: 0
    }
    this.workClick = this.workClick.bind(this);
    this.restClick = this.restClick.bind(this);
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleStopTimer = this.handleStopTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.displayTime = this.displayTime.bind(this);
    this.getTimeRemaining = this.getTimeRemaining.bind(this);
  }

// TODO: refactor button clicks

  workClick(e) {//put a min and max
    if (!this.state.phase) {
      let timeRemaining = String(e.target.classList).includes('increase') ?
      this.getTimeRemaining(this.state.timeRemaining.total + 60000) :
      this.getTimeRemaining(this.state.timeRemaining.total - 60000);

      this.setState({ timeRemaining, workTime: timeRemaining.total });
    }
  }

  restClick(e) {//put a min and max
    if (!this.state.phase) {
      this.setState(String(e.target.classList).includes('increase') ?
        { restTime: this.state.restTime + 60000 } :
        { restTime: this.state.restTime - 60000 });
    }
  }

  handleStartTimer() {
    const { status, phase, count } = this.state;
    this.setState(status === 'Start' ? { status: 'Pause', phase: true } : { status:'Start', phase: true });
    console.log(count)
    status === 'Start' ? this.startTimer() : this.pauseTimer();
    clearInterval(this.state.timeElapsed);
  }

  handleStopTimer() {
    const { status, workTime } = this.state;
    clearInterval(this.state.timeElapsed);
    this.setState({ timeElapsed: null,
      timeRemaining: this.getTimeRemaining(workTime),
      status: 'Start',
      phase: '',
      count: 0 })
  }

  startTimer() {
    const { status } = this.state;
    this.displayTime();
    if (status === 'Start') {
      this.setState({ timeElapsed: setInterval(this.displayTime, 1000) })
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
    } else {
      const { count } = this.state;
      clearInterval(this.state.timeElapsed)
      //this.setState({ count: count + 1})
      this.completePomodoro();
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

  completePomodoro() {
    const { restTime, count, workTime } = this.state;
    if (count > 6) {
      console.log('Youre on a long break')
      this.setState({ status: 'Start', timeRemaining: this.getTimeRemaining(6000), count: 0 })
    } else if (count % 2 === 0 && count <= 6) {
      console.log('Youre on a short break');
      this.setState({ status: 'Start', timeRemaining: this.getTimeRemaining(1000), count: count + 1})
    } else if (count % 2 !== 0) {
      console.log('Youre working');
      this.setState({ status: 'Start', timeRemaining: this.getTimeRemaining(2000), count: count + 1})
    }
  }


  render(){
    const workTimeMin = (this.state.workTime)/1000/60;
    const restTimeMin = (this.state.restTime)/1000/60;
    const pomodoros = (this.state.count)/2
    return (
    <div className="pomodoro-container">
      <Time time={this.state.timeRemaining}/>
      <Controls
      status={this.state.status}
      handleOnClickStart={this.handleStartTimer}
      handleOnClickStop={this.handleStopTimer}/>
      <IntervalSettings
      workTime={workTimeMin}
      restTime={restTimeMin}
      handleWorkClick={this.workClick}
      handleRestClick={this.restClick}/>
      <PomodoroStats
      count={pomodoros}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
