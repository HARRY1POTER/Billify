import React from "react";

const Receipt = ({
  cart,
  total,
  transactionId,
  paymentMethod,
  printReceipt,
}) => {
  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-teal-600">Store Name</h1>
        <p className="text-gray-600">123 Store Address, City, Country</p>
        <p className="text-gray-600">Phone: (123) 456-7890</p>
      </div>
      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="flex justify-between">
          <p className="font-semibold">Transaction ID:</p>
          <p>{transactionId}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="font-semibold">Date:</p>
          <p>{new Date().toLocaleString()}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-teal-600">Items</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <p>{item.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <p className="text-2xl font-bold text-teal-600">Total: ${total}</p>
          <p className="text-xl font-semibold text-teal-500">
            Payment: {paymentMethod === "cash" ? "Cash" : "Online"}
          </p>
        </div>
        <div className="mt-6 text-center">
          <p>Thank you for shopping with us!</p>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={printReceipt}
            className="bg-teal-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-teal-700 transition transform hover:scale-105"
          >
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
}; 

export default Receipt;
