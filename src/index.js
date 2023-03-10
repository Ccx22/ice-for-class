import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Dom from 'react-dom'
import Routes from './router'
import './utils/reset.css'
Dom.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>, document.getElementById("root")
);


