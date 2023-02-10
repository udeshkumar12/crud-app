import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import contextProvider from './components/context/contextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <contextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </contextProvider>
);


