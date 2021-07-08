import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Lol from './components/Lol';
import Tile from './components/Tile';
import Board from './components/Board';

ReactDOM.render(
  // <div><Tile color={"red"}/>
  // <Tile color={"rgb(0, 200, 0)"}/>
  // </div>,
  <div><Board/></div>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
