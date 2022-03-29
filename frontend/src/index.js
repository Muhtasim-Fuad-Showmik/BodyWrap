import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

ReactDOM.render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>,
  document.getElementById('root')
);
