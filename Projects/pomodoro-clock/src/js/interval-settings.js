import React from 'react';

const IntervalSettings = (props) => {
  return (
    <div className={props.settingsClass}>
    <div className="interval-settings">
      <p>Session</p>
      <button className="increase work-time" onClick={props.handleWorkClick}>▲</button>
      <div className="work-time">{props.workTime}</div>
      <button className="decrease work-time" onClick={props.handleWorkClick}>▼</button>
    </div>
    <div className="interval-settings">
      <p>Break</p>
      <button className="increase rest-time" onClick={props.handleRestClick}>▲</button>
      <div className="rest-time">{props.restTime}</div>
      <button className="decrease rest-time" onClick={props.handleRestClick}>▼</button>
    </div>
    <div className="interval-settings">
      <p>Long Break</p>
      <button className="increase long-rest-time" onClick={props.handleLongRest}>▲</button>
      <div className="long-rest-time">{props.longRestTime}</div>
      <button className="decrease long-rest-time" onClick={props.handleLongRest}>▼</button>
    </div>
    </div>
    );
  }

export default IntervalSettings