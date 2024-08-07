import React from "react";
import ProductCard from "../components/ProductCard";
import About from "../components/About";
import LandingPage from "../components/LandingPage";
import Category from "../components/Category";
import { Helmet } from "react-helmet";

const Home = ({ products, onCategoryClick }) => {
  return (
    <div>
      <Helmet>
        <title>Gerai Wirausaha Mandiri - Marketplace</title>
        <meta
          name="description"
          content="Gerai Wirausaha Mandiri (GWM) menawarkan sembako murah dan jasa konsultasi bimbingan belajar Matematika dan Statistika dekat Universitas Syiah Kuala. Pilihan ideal untuk mahasiswa dan masyarakat sekitar."
        />
        <meta
          property="og:title"
          content="Gerai Wirausaha Mandiri - Marketplace Sembako & Bimbingan Belajar"
        />
        <meta
          property="og:description"
          content="Temukan sembako murah dan layanan konsultasi bimbingan belajar di Gerai Wirausaha Mandiri, dekat Universitas Syiah Kuala. Solusi lengkap untuk kebutuhan harian dan akademik Anda."
        />
      </Helmet>

      <LandingPage />
      <section className="mb-10 mt-20 ml-12" id="kategori">
        <Category onCategoryClick={onCategoryClick} />
      </section>
      <section id="produk" className="py-10 sm:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section id="about" className="flex justify-center items-center mb-16">
        <About />
      </section>
    </div>
  );
};

export default Home;
