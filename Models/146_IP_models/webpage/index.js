import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import image1 from './img1.jpeg';
const img1 = React.createElement("img", {className:"image", src:{image1}});
ReactDOM.render(img1, document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

