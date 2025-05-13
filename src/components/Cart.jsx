import React from "react";

const Cart = ({
  cart,
  removeFromCart,
  total,
  handlePaymentMethod,
  paymentMethod,
  generateReceipt,
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold text-gray-800">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md"
            >
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-gray-600">Qty: {item.quantity}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-700 transition transform hover:scale-105"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-4 flex justify-between items-center">
            <p className="text-2xl font-bold text-gray-800">Total: ${total}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => handlePaymentMethod("cash")}
                className={`${
                  paymentMethod === "cash" ? "bg-teal-500" : "bg-gray-400"
                } text-white py-2 px-6 rounded-full shadow-md transition transform hover:scale-105`}
              >
                Cash
              </button>
              <button
                onClick={() => handlePaymentMethod("online")}
                className={`${
                  paymentMethod === "online" ? "bg-teal-500" : "bg-gray-400"
                } text-white py-2 px-6 rounded-full shadow-md transition transform hover:scale-105`}
              >
                Online
              </button>
            </div>
            <button
              onClick={generateReceipt}
              className="bg-teal-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-teal-700 transition transform hover:scale-105"
            >
              Generate Receipt
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default Cart;
