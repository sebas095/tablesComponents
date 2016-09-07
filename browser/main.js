import DB from './store/data.json';
import React from 'react';
import ReactDOM from 'react-dom';
import DEOTR from './components/DEOTR';

const app = document.getElementById('app');

ReactDOM.render(
  <DEOTR store={DB} />
, app);
