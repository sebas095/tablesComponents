import DB from './store/recursos.json';
import React from 'react';
import ReactDOM from 'react-dom';
import DEOTR from './components/DEOTR';
import io from 'socket.io-client';

const socket = io.connect();
const app = document.getElementById('app');

ReactDOM.render(
  <DEOTR store={DB} socket={socket}/>
, app);
