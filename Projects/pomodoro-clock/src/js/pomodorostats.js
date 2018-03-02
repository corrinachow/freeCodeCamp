import React from 'react';

const PomodoroStats = (props) => {
  return(
    <div className="pomodoro-stats">
    Pomodoros: {props.count}
    </div>
    )
}

export default PomodoroStats;