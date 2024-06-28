import React, { useState } from 'react';
import burgerbar from '../images/burgerbar.png';
import close from '../images/close.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center sm:px-16 mb-10">
      <a href="/" className="ml-6 sm:ml-0">
        <h1 className="navbar-title font-semibold text-gray-900">GWM - Stat Marketplace</h1>
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="font-poppins font-normal hover:opacity-60 cursor-pointer text-[16px] mr-10">
          <a href="#beranda">Beranda</a>
        </li>
        <li className="font-poppins font-normal hover:opacity-60 cursor-pointer text-[16px] mr-10">
          <a href="#kategori">Kategori</a>
        </li>
        <li className="font-poppins font-normal hover:opacity-60 cursor-pointer text-[16px] mr-10">
          <a href="#produk">Produk</a>
        </li>
        <li className="font-poppins font-normal hover:opacity-60 cursor-pointer text-[16px] mr-10">
          <a href="#kontak">Kontak</a>
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center mr-4">
        <img
          src={toggle ? close : burgerbar}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <div className="p-6 bg-white text-gray-700 shadow-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar border">
          <ul className="list-none flex-col justify-end items-center flex-1">
            <li className="font-poppins font-normal mb-2 hover:opacity-60 cursor-pointer text-[16px] mr-10">
              <a href="#beranda">Beranda</a>
            </li>
            <li className="font-poppins font-normal mb-2 hover:opacity-60 cursor-pointer text-[16px] mr-10">
              <a href="#kategori">Kategori</a>
            </li>
            <li className="font-poppins font-normal mb-2 hover:opacity-60 cursor-pointer text-[16px] mr-10">
              <a href="#produk">Produk</a>
            </li>
            <li className="font-poppins font-normal mb-2 hover:opacity-60 cursor-pointer text-[16px] mr-10">
              <a href="#kontak">Kontak</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
