import React from 'react';
import ProductCard from '../components/ProductCard';
import About from '../components/About';
import LandingPage from '../components/LandingPage';
import Category from '../components/Category';

const Home = ({ products, onCategoryClick }) => {
  return (
    <div>
        <LandingPage />
        <section class="mb-10 mt-20 ml-12" id="kategori">
            <Category onCategoryClick={onCategoryClick}/>
        </section>
        <section id="produk" className="py-10 sm:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </section>
        <section id="about" class="flex justify-center items-center mb-16">
            <About />
        </section>
    </div>
  );
};

export default Home;
