import React from 'react';

const IntervalSettings = (props) => {
  return (
    <div className="settings">
    <div className="interval-settings">
      <p>session</p>
      <button className="increase work-time" onClick={props.handleWorkClick}>^</button>
      <div className="work-time">{props.workTime}</div>
      <button className="decrease work-time" onClick={props.handleWorkClick}>v</button>
    </div>
    <div className="interval-settings">
      <p>break</p>
      <button className="increase rest-time" onClick={props.handleRestClick}>^</button>
      <div className="rest-time">{props.restTime}</div>
      <button className="decrease rest-time" onClick={props.handleRestClick}>v</button>
    </div>
    <div className="interval-settings">
      <p>long break</p>
      <button className="increase long-rest" onClick={props.handleLongRest}>^</button>
      <div className="long-rest-time">{props.longRestTime}</div>
      <button className="decrease long-rest" onClick={props.handleLongRest}>v</button>
    </div>
    </div>
    );
  }

export default IntervalSettings