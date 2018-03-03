import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Controls from './js/controls';
import IntervalSettings from './js/intervalcontrols';
import Time from './js/time';
import ProgressBar from './js/progressbar';
import PomodoroStats from './js/pomodorostats'
import Tomato from './js/tomato';
import { _25, _05, _15, _01, _55 } from './js/time-variables'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phase: false,
      status: 'Start',
      timeRemaining: this.getTimeRemaining(_25),//default 25 min
      timeElapsed: null,
      workTime: _25,
      restTime: _05,
      longRest: _15,
      count: 0
    }
    //this.handleClick = this.handleClick.bind(this);
    this.workClick = this.workClick.bind(this);
    this.restClick = this.restClick.bind(this);
    this.longRestClick = this.longRestClick.bind(this);
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleStopTimer = this.handleStopTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.displayTime = this.displayTime.bind(this);
    this.getTimeRemaining = this.getTimeRemaining.bind(this);
  }

// TODO: refactor button clicks

  workClick(e) {
    if (!this.state.phase && this.state.timeRemaining.total < _55 && this.state.timeRemaining.total > _05) {
      let timeRemaining = String(e.target.classList).includes('increase') ?
      this.getTimeRemaining(this.state.timeRemaining.total + _01) :
      this.getTimeRemaining(this.state.timeRemaining.total - _01);
      this.setState({ timeRemaining, workTime: timeRemaining.total });
    }
  }

  restClick(e) {
    const { restTime } = this.state;
    if (!this.state.phase && restTime < _55 && restTime > _01) {
      this.setState(String(e.target.classList).includes('increase') ?
        { restTime: restTime + _01 } :
        { restTime: restTime - _01 });
    }
  }

  longRestClick(e) {
    const { longRest } = this.state;
    if (!this.state.phase && longRest < _55 && longRest > _01) {
      this.setState(String(e.target.classList).includes('increase') ?
        { longRest: longRest + _01 } :
        { longRest: longRest - _01 });
    }
  }

  handleStartTimer() {
    const { status, count } = this.state;
    this.setState(status === 'Start' ? { status: 'Pause', phase: true } : { status:'Start', phase: true });
    console.log(count)
    status === 'Start' ? this.startTimer() : this.pauseTimer();
    clearInterval(this.state.timeElapsed);
  }

  handleStopTimer() {
    const { workTime } = this.state;
    clearInterval(this.state.timeElapsed);
    this.setState({ timeElapsed: null,
      timeRemaining: this.getTimeRemaining(workTime),
      status: 'Start',
      phase: false,
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
    if (this.state.timeRemaining.total > 0) {
      let timeRemaining = this.getTimeRemaining(
        this.state.timeRemaining.total - 1000
        );
      this.setState({ timeRemaining });
    } else {
      clearInterval(this.state.timeElapsed)
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
    const { count, workTime, restTime, longRest } = this.state;
    if (count > 6) {
      console.log('Youre on a long break')
      this.setState({ status: 'Start', timeRemaining: this.getTimeRemaining(longRest), count: count + 1 })
    } else if (count % 2 === 0 && count <= 6) {
      console.log('Youre on a short break');
      this.setState({ status: 'Start', timeRemaining: this.getTimeRemaining(restTime), count: count + 1})
    } else if (count % 2 !== 0) {
      console.log('Youre working');
      this.setState({ status: 'Start', timeRemaining: this.getTimeRemaining(workTime), count: count + 1})
    }
  }

  render(){
    const workTimeMin = (this.state.workTime)/1000/60;
    const restTimeMin = (this.state.restTime)/1000/60;
    const longRestMin = (this.state.longRest)/1000/60;
    const pomodoros = Math.floor((this.state.count)/2);
    return (
    <div className="pomodoro-container">
      <Tomato />
      <Time time={this.state.timeRemaining}/>
      <ProgressBar/>
      <Controls
      status={this.state.status}
      handleOnClickStart={this.handleStartTimer}
      handleOnClickStop={this.handleStopTimer}/>
      <IntervalSettings
      workTime={workTimeMin}
      restTime={restTimeMin}
      longRestTime={longRestMin}
      handleWorkClick={this.workClick}
      handleRestClick={this.restClick}
      handleLongRest={this.longRestClick}/>
      <PomodoroStats
      count={pomodoros}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
