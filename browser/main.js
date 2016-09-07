import Store from './store/data.json';
import React from 'react';
import ReactDOM from 'react-dom';
import DEOTR from './components/DEOTR';

let dataRD = Store.dataRD;
let dataR = Store.dataR;

const app = document.getElementById('app');

ReactDOM.render(
  <DEOTR/>
, app);
