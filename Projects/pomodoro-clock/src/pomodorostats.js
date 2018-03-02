import React from 'react';

const PomodoroStats = (props) => {
  return(
    <div className="pomodoro-stats">
    Count: {props.count}
    </div>
    )
}

export default PomodoroStats;