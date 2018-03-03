import React from 'react';

const Controls = (props) => {
  return (
    <div className="controls">
      <button className="start" onClick={props.handleOnClickStart}>{props.status}</button>
      <button className="stop" onClick={props.handleOnClickStop}>Stop</button>
      <button className="reset" onClick={props.handleOnClickReset}>Reset</button>
    </div>
    )
}

export default Controls;
