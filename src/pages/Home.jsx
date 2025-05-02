

import React, { useState, useEffect } from "react";
import Receipt from "../components/Receipt";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import CategorySelector from "../components/CategorySelector";
import productsData from "./productsData.json";

function Home() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [showReceipt, setShowReceipt] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("electronics");

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingItemIndex !== -1) {
        const updatedCart = prevCart.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    const newTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  const changeCategory = (category) => {
    setSelectedCategory(category);
  };

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const generateReceipt = () => {
    setTransactionId("TX" + Math.floor(Math.random() * 1000000));
    setShowReceipt(true);
  };

  const printReceipt = () => {
    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write("<html><head><title>Receipt</title><style>");
    printWindow.document.write(`
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
        background-color: #fff;
        color: #000;
      }
      .receipt {
        max-width: 600px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
      }
      .receipt-header {
        text-align: center;
        margin-bottom: 20px;
      }
      .receipt-items .item {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
      }
      .receipt-footer {
        margin-top: 20px;
        text-align: center;
      }
    `);
    printWindow.document.write("</style></head><body>");
    let itemsHTML = "";
    cart.forEach((item) => {
      itemsHTML += `
        <div class="item">
          <span>${item.name}</span>
          <span>Qty: ${item.quantity}</span>
          <span>Price: $${item.price}</span>
          <span>Total: $${item.price * item.quantity}</span>
        </div>
      `;
    });
    printWindow.document.write(`
      <div class="receipt">
        <div class="receipt-header">
          <h1>Store Name</h1>
          <p>123 Store Address, City, Country</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div class="receipt-details">
          <p><strong>Transaction ID:</strong> ${transactionId}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
        <div class="receipt-items">
          <h2>Items Purchased:</h2>
          ${itemsHTML}
        </div>
        <div class="receipt-footer">
          <p><strong>Total:</strong> $${total}</p>
          <p><strong>Payment Method:</strong> ${
            paymentMethod === "cash" ? "Cash" : "Online"
          }</p>
          <p>Thank you for shopping with us! We hope to see you again soon.</p>
        </div>
      </div>
    `);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 py-8 px-4">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center text-teal-600">
          Multi-Category Store Billing System
        </h1>

        <CategorySelector
          categories={Object.keys(productsData)}
          selectedCategory={selectedCategory}
          changeCategory={changeCategory}
        />

        <ProductList
          products={productsData[selectedCategory]}
          addToCart={addToCart}
        />

        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          total={total}
          handlePaymentMethod={handlePaymentMethod}
          paymentMethod={paymentMethod}
          generateReceipt={generateReceipt}
        />

        {showReceipt && (
          <Receipt
            cart={cart}
            total={total}
            transactionId={transactionId}
            paymentMethod={paymentMethod}
            printReceipt={printReceipt}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
