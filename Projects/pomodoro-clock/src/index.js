import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Controls from './controls';
import Time from './time';
import IntervalSettings from './intervalcontrols';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workTime: props.workInterval,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.workTime !== this.props.nextProps) {
      console.log('ok')
    }
  }

  render(){
    return (
    <div className="pomodoro-container">
      <IntervalSettings/>
      <Controls
      handleOnClickStart={this.handleStartTimer}
      handleOnClickStop={this.handleStopTimer}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
