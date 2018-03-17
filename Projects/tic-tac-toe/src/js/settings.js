import React from 'react';

const Players = (props) => {
  return(
    <div className="settings">
      <button value="1" onClick={props.numPlayers}>1 Player</button>
      <button value="2" onClick={props.numPlayers}>2 Player</button>
    </div>
    );
}

export default Players;