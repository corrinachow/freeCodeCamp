import React from 'react';

const IntervalSettings = (props) => {
  return (
    <div className="interval-settings">
    <div className="work-interval">
      <button className="increase" onClick={props.handleWorkClick}>^</button>
      <div className="work-time">{props.workTime}</div>
      <button className="decrease" onClick={props.handleWorkClick}>v</button>
    </div>
    <div className="rest-interval">
      <button className="increase" onClick={props.handleRestClick}>^</button>
      <div className="rest-time">{props.restTime}</div>
      <button className="decrease" onClick={props.handleRestClick}>v</button>
    </div>
    {/*<div className="long-rest-interval">
      <button onClick={props.handleRestIncrease}>^</button>
      <div className="rest-time">{props.restTime}</div>
      <button onClick={props.handleRestDecrease}>v</button>
    </div>*/}
    </div>
    );
  }

export default IntervalSettings