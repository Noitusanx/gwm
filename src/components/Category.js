import React from "react";
import ingredient from "../images/ingredient.png";
import book from "../images/book.png";
import discussion from "../images/discussion.png";

const Category = ({ onCategoryClick }) => {
  return (
    <div className="flex font-poppins justify-center items-center text-sm">
      <button
        type="button"
        className="filter-button"
        onClick={() => onCategoryClick("Bahan Pokok")}
      >
        <div className="hover:opacity-70">
          <img
            src={ingredient}
            alt="Gambar Bahan Pokok - Kategori sembako"
            className="bg-white px-2 mr-2 hover:opacity-70 rounded-lg w-16 shadow-md"
            loading="lazy"
          />
          <p className="text-center pt-1 w-2/3">Bahan Pokok</p>
        </div>
      </button>
      <button
        type="button"
        className="filter-button"
        onClick={() => onCategoryClick("Modul Belajar")}
      >
        <div className="hover:opacity-70 mx-2">
          <img
            src={book}
            alt="Gambar Modul Belajar - Kategori bahan ajar"
            className="bg-white px-2 mr-2 hover:opacity-70 rounded-lg w-16 shadow-md"
            loading="lazy"
          />
          <p className="text-center pt-1 w-2/3">Modul Belajar</p>
        </div>
      </button>
      <button
        type="button"
        className="filter-button"
        onClick={() => onCategoryClick("Konsultasi Belajar")}
      >
        <div className="hover:opacity-70">
          <img
            src={discussion}
            alt="Gambar Konsultasi Belajar - Kategori layanan konsultasi"
            className="bg-white px-2 hover:opacity-70 rounded-lg w-16 shadow-md"
            loading="lazy"
          />
          <p className="text-center pt-1 w-1/2">Konsultasi Belajar</p>
        </div>
      </button>
    </div>
  );
};

export default Category;
