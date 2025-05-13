import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="mt-8  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white  border-green-500 border p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-gray-600">
            <strong>Price:</strong> ${product.price}
          </p>
          {/* <p className="text-gray-600">
            <strong>Stock:</strong> {product.stock}
          </p> */} 
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-teal-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-teal-700 transition transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
