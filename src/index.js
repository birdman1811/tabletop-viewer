import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Player from './Player';
import PlayerList from './PlayerList';



const PLAYERS = [
  {Name: 'Sam Smith', Phone: '07582369741', Session: 'Session A'},

]

ReactDOM.render(
    <Viewer />,
    document.getElementById('root')
  );