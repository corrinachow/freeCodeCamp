import React from 'react';

const Time = (props) => {
  return (
    <span className={props.timeClass}>{`${props.time.minutes}:${props.time.seconds}`}</span>
  )
}

export default Time;