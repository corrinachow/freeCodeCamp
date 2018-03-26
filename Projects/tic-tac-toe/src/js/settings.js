import React from 'react';

const Players = (props) => {
  return(
    <div className="player-settings">
      <p>How many players?</p>
      <button value="1" onClick={props.numPlayers}>1 Player</button>
      <button value="2" onClick={props.numPlayers}>2 Player</button>
    </div>
    );
}

export default Players;