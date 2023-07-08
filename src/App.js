import React from 'react';
import Login from './Login/index';
import Products from './Products/index';
import ProductDisplay from './ProductDetails/index';
import Forms from './Forms/index';
import Navbar from './Navbar/index';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Products />} />  
          <Route path="/home" element={<Products />} />
          <Route path="/about" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Products/:productId" element={<ProductDisplay />} />
          <Route path="/add" element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;