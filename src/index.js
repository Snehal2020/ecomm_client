import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
// import '../src/pages/Admin/Adminmenu';
import App from './App';
import { AuthProvider } from './context/auth';
import { SearchProvider } from './context/search';
import { CartProvider } from './context/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AuthProvider>
 <SearchProvider>
 <CartProvider>
 <BrowserRouter>
 
  <App />
 

</BrowserRouter>
 </CartProvider>
 </SearchProvider>
 </AuthProvider>
);

