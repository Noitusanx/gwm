import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import products from './data/Products';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home products={filteredProducts} onCategoryClick={handleCategoryClick}/>}/>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
