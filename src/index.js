import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <App/>
      </AuthContext>  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

