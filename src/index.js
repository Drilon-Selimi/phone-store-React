import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {ProductProvider} from './context';

ReactDOM.render(
    <ProductProvider>
    <Router>
    <App />
    </Router>
    </ProductProvider>,
  document.getElementById('root')
);
