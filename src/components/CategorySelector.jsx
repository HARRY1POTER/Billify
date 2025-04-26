import React from "react";

const CategorySelector = ({ categories, selectedCategory, changeCategory }) => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 mt-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => changeCategory(category)}
          className={`${
            selectedCategory === category
              ? "bg-teal-600 text-white"
              : "bg-teal-500 text-white"
          } text-lg font-semibold py-2 px-6 md:px-8 rounded-full shadow-lg transition transform hover:scale-105 m-2`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};
 
export default CategorySelector;
