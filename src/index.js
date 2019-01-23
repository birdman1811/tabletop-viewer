import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Player from './Player';
import PlayerList from './PlayerList';

function PlayerList(props) {
  return(
    <div>
      {props.items.map((player, id) => (
        <Item key={id} item={player} />
      ))}
    </div>
  );
}

ReactDOM.render(
    <Viewer />,
    document.getElementById('root')
  );