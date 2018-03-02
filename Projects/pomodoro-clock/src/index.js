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
      phase: '',
      status: 'Start',
      timeRemaining: this.getTimeRemaining(1500000),//default 25 min
      timeElapsed: null,
      workTime: 1500000,
      restTime: 300000,
      longRest: 0,
      count: 0
    }
    this.workClick = this.workClick.bind(this);
    this.workDecrease = this.workDecrease.bind(this);
    this.restIncrease = this.restIncrease.bind(this);
    this.restDecrease = this.restDecrease.bind(this);
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleStopTimer = this.handleStopTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.displayTime = this.displayTime.bind(this);
    this.getTimeRemaining = this.getTimeRemaining.bind(this);
  }

// TODO: refactor button clicks

  workClick(e) {
    if (!this.state.phase) {
      let timeRemaining = String(e.target.classList).includes('increase') ?
      this.getTimeRemaining(this.state.timeRemaining.total + 60000) :
      this.getTimeRemaining(this.state.timeRemaining.total - 60000);

      this.setState({ timeRemaining, workTime: timeRemaining.total });
    }



    console.log(e.target.classList)

  }

  workDecrease() {
    if (!this.state.phase) {
      let timeRemaining = this.getTimeRemaining(
          this.state.timeRemaining.total - 60000
          );
      this.setState({ timeRemaining, workTime: timeRemaining.total });
    }
  }

  restIncrease() {
    if (!this.state.phase) {
      const { restTime } = this.state;
      this.setState({ restTime: restTime + 60000 });
    }
  }

  restDecrease() {
    const { restTime } = this.state;
    this.setState({ restTime: restTime - 60000 });
  }

  handleStartTimer() {
    const { status, phase, count } = this.state;
    if (count % 2 !== 0) {
      this.setState(status === 'Start' ? { status: 'Pause', phase: 'Work' } : { status:'Start', phase: 'Work' });
    } else {
      this.setState(status === 'Start' ? { status: 'Pause', phase: 'Break' } : { status:'Start', phase: 'Break' });
    }
    console.log(phase)

    status === 'Start' ? this.startTimer() : this.pauseTimer();
    clearInterval(this.state.timeElapsed);
  }

  handleStopTimer() {
    const { status, workTime } = this.state;
    clearInterval(this.state.timeElapsed);
    this.setState({ timeElapsed: null,
      timeRemaining: this.getTimeRemaining(workTime),
      status: 'Start',
      phase: 'Work',
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
      this.setState({ count: count + 1})
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
    const { restTime, count } = this.state;
    if (count < 8) {
      console.log('earned short break');
      this.setState({ status: 'Start', timeRemaining: this.getTimeRemaining(restTime)})
    } else {
      console.log('LONG BREAK');
      this.setState({ status: 'Start', timeRemaining: this.getTimeRemaining(0), count: 0 })
    }
  }


  render(){
    const workTimeMin = (this.state.workTime)/1000/60;
    const restTimeMin = (this.state.restTime)/1000/60;
    return (
    <div className="pomodoro-container">
      <Time time={this.state.timeRemaining}/>
      <Controls
      status={this.state.status}
      handleOnClickStart={this.handleStartTimer}
      handleOnClickStop={this.handleStopTimer}/>
      <IntervalSettings
      workTime={workTimeMin}
      deltaWork={this.changeWork}
      restTime={restTimeMin}
      handleWorkClick={this.workClick}
      handleRestIncrease={this.restIncrease}
      handleRestDecrease={this.restDecrease}/>
      <PomodoroStats
      count={this.state.count}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
