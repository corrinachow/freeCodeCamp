import React from 'react';

const Time = (props) => {
  return (
    <span className="time">{`${props.minutes}:${props.seconds}`}</span>
  )
}

//{`${props.time.minutes}:${props.time.seconds}`}

export default Time;