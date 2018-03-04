import React from 'react';

const PomodoroStats = (props) => {
  return(
    <div className="pomodoro-stats">
    <div>Sessions:</div>
    {`${props.count}/4`}
    </div>
    )
}

export default PomodoroStats;