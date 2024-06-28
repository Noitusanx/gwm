import React from "react";
import ingredient from "../images/ingredient.png";
import book from "../images/book.png";
import discussion from "../images/discussion.png";

const Category = ({ onCategoryClick }) => {
  return (
    <div class="flex font-poppins justify-center items-center text-sm">
        <button type="button" class="filter-button" onClick={() => onCategoryClick('Bahan Pokok')}>
        <div class="hover:opacity-70">
            <img src={ingredient} alt="Bahan Pokok"
            class="bg-white px-2 mr-2 hover:opacity-70 rounded-lg w-16 shadow-md" />
            <p class="text-center pt-1 w-2/3">Bahan Pokok</p>
        </div>
        </button>
        <button type="button" class="filter-button" onClick={() => onCategoryClick('Modul Belajar')}>
        <div class="hover:opacity-70 mx-2">
            <img src={book} alt="Modul Belajar"
            class="bg-white px-2 mr-2 hover:opacity-70 rounded-lg w-16 shadow-md" />
            <p class="text-center pt-1 w-2/3">Modul Belajar</p>
        </div>
        </button>
        <button type="button" class="filter-button" onClick={() => onCategoryClick('Konsultasi Belajar')}>
        <div class="hover:opacity-70">
            <img src={discussion} alt="Konsultasi Belajar"
            class="bg-white px-2 hover:opacity-70 rounded-lg w-16 shadow-md" />
            <p class="text-center pt-1 w-1/2">Konsultasi Belajar</p>
        </div>
        </button>
    </div>
  );
};

export default Category;
