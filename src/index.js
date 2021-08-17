import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap';
import './styles/reset.css';
import './styles/styles.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
