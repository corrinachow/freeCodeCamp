import React from 'react';

export const Tokens = (props) => {
  return(
    <div className="settings">
    <p>Player 1 token?</p>
    <button value="O" onClick={props.playerToken}>O</button>
    <button value="X" onClick={props.playerToken}>X</button>
    </div>
    );
}

export default Tokens;