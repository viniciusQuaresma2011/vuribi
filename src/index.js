import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* import { render } from "react-dom"; */
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


/* render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
); */
