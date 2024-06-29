import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import products from './data/Products';
import OrderForm from './pages/OrderForm';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'Semua'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={
              <div className="bg-gray-50 min-h-screen">
                  <Navbar />
                  <Home products={filteredProducts} onCategoryClick={handleCategoryClick} />
                  <Footer />
              </div>
          } />
          <Route path="/orderform/:productId" element={<OrderForm />} />
        </Routes>
    </Router>
  );
};

export default App;
