import React from 'react';

const Controls = (props) => {
  return (
    <div className="controls">
      <button onClick={props.handleOnClickStart}>{props.status}</button>
      <button onClick={props.handleOnClickStop}>Stop</button>
    </div>
    )
}

export default Controls;
