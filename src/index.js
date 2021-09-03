import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


import './styles/reset.css';
import './styles/styles.scss';
import 'aos/dist/aos.css';
import 'react-medium-image-zoom/dist/styles.css';


import 'bootstrap';
import AOS from 'aos';
AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

