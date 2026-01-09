import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [billing, setBilling] = useState({
    name: user?.name || "",
    email: user?.email || "",
    contact: "",
    address: "",
    amount: cart.reduce(
      (acc, item) =>
        acc + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    ),
  });

  const handleChange = (e) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, contact, address, amount } = billing;

    if (!name || !email || !contact || !address || !amount) {
      alert("Please fill all billing details and amount!");
      return;
    }

    const options = {
      key: "rzp_test_RSR2MLZZflV80z",
      amount: amount * 100,
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "Payment for your order",
      prefill: { name, email, contact },
      notes: { address },
      theme: { color: "#3399cc" },
      handler: function (response) {
        // Payment success
        alert(
          `Payment Successful! Razorpay ID: ${response.razorpay_payment_id}`
        );

        // Store order in localStorage per user
        const ordersKey = `orders_${user.email}`;
        const existingOrders =
          JSON.parse(localStorage.getItem(ordersKey)) || [];
        const newOrder = {
          id: Date.now(),
          items: cart,
          total: amount.toFixed(2),
          billing: { name, email, contact, address },
          paymentId: response.razorpay_payment_id,
          date: new Date().toLocaleString(),
        };
        localStorage.setItem(
          ordersKey,
          JSON.stringify([...existingOrders, newOrder])
        );

        // Clear cart
        clearCart();

        // Navigate to order confirmation or menu
        navigate("/menu");
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="checkout">
      <br></br>
      <h2 className="text-center text-white">Checkout & Razorpay Payment</h2>
      <br></br>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={billing.name}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={billing.email}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={billing.contact}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={billing.address}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={billing.amount}
          readOnly
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-success w-100">
          Pay Now
        </button>
      </form>
      <br></br>
    </div>
  );
};

export default Checkout;
