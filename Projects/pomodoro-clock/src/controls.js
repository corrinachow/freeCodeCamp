import React from 'react';

const Controls = (props) => {
  return (
    <div className="controls">
      <button onClick={props.handleClickStart}>Start</button>
      <button onClick={props.handleClickStop}>Stop</button>
    </div>
    )
}

export default Controls;
