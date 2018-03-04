import React from 'react';

const PomodoroStats = (props) => {
  return(
    <div className="pomodoro-stats">
    {`Session ${props.count}/4`}
    </div>
    )
}

export default PomodoroStats;