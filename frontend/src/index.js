import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';

ReactDOM.render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>,
  document.getElementById('root')
);
