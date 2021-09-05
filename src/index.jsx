import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import AppContainer from './app/components/AppContainer';

ReactDOM.render(
  <HashRouter>
    <AppContainer />
  </HashRouter>,
  document.getElementById('root'),
);
