import React from 'react';

const IntervalSettings = (props) => {
  return (
    <div className="interval-settings">
    <div className="work-interval">
      <button onClick={props.handleWorkIncrease}>^</button>
      <div className="work-time">{props.workTime}</div>
      <button onClick={props.handleWorkDecrease}>v</button>
    </div>
    <div className="rest-interval">
      <button onClick={props.handleRestIncrease}>^</button>
      <div className="rest-time">{props.restTime}</div>
      <button onClick={props.handleRestDecrease}>v</button>
    </div>
    </div>
    );
  }

export default IntervalSettings