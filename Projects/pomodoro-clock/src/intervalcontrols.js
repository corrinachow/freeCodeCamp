import React from 'react';

const IntervalSettings = (props) => {
  return (
    <div className="interval-settings">
    <div className="work-interval">
      <button onClick={props.handleWorkIncrease}>^</button>
      <input type="number" value={props.time.minutes}></input>
      <button onClick={props.handleWorkDecrease}>v</button>
    </div>
    <div className="rest-interval">
      <button onClick={props.handleRestIncrease}>^</button>
      <input type="number" value={props.restInterval}></input>
      <button onClick={props.handleRestDecrease}>v</button>
    </div>
    </div>
    );
  }

export default IntervalSettings