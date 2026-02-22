import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const BG    = "#120a08";
const SURF  = "#1c1008";
const CARD  = "#221409";
const CREAM = "#f5ede0";
const BEIGE = "#d4b68c";
const ORANGE= "#e85d04";
const RED   = "#c0392b";
const TLOW  = "#6b5540";
const TMID  = "#a8916e";
const BDIM  = "rgba(212,182,140,0.12)";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + parseFloat(item.price.replace("$", "")) * item.quantity, 0
  );

  const [billing, setBilling] = useState({
    name: user?.name || "",
    email: user?.email || "",
    contact: "",
    address: "",
    amount: total,
  });

  const handleChange = (e) => setBilling({ ...billing, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, contact, address, amount } = billing;
    if (!name || !email || !contact || !address || !amount) {
      alert("Please fill all billing details!");
      return;
    }
    const options = {
      key: "rzp_test_RSR2MLZZflV80z",
      amount: Math.round(amount * 100),
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "Payment for your order",
      prefill: { name, email, contact },
      notes: { address },
      theme: { color: ORANGE },
      handler: function (response) {
        alert(`Payment Successful! Razorpay ID: ${response.razorpay_payment_id}`);
        const ordersKey = `orders_${user.email}`;
        const existingOrders = JSON.parse(localStorage.getItem(ordersKey)) || [];
        const newOrder = {
          id: Date.now(),
          items: cart,
          total: amount.toFixed(2),
          billing: { name, email, contact, address },
          paymentId: response.razorpay_payment_id,
          date: new Date().toLocaleString(),
        };
        localStorage.setItem(ordersKey, JSON.stringify([...existingOrders, newOrder]));
        clearCart();
        navigate("/menu");
      },
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const inputStyle = {
    background: SURF,
    color: CREAM,
    border: `1px solid ${BDIM}`,
    fontSize: '14px',
    padding: '12px 16px',
    borderRadius: '10px',
    outline: 'none',
    width: '100%',
  };

  const fields = [
    { name: 'name',    type: 'text',   placeholder: 'Full Name',       icon: '👤' },
    { name: 'email',   type: 'email',  placeholder: 'Email Address',   icon: '✉️' },
    { name: 'contact', type: 'text',   placeholder: 'Contact Number',  icon: '📞' },
    { name: 'address', type: 'text',   placeholder: 'Delivery Address',icon: '📍' },
  ];

  return (
    <div style={{ background: BG, minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <div className="d-flex align-items-center justify-content-center flex-column"
           style={{ minHeight: '220px', borderBottom: `1px solid ${BDIM}` }}>
        <div className="d-flex align-items-center gap-3 mb-3">
          <div style={{ width: '40px', height: '1px', background: BEIGE }} />
          <span className="fw-bold text-uppercase" style={{ color: BEIGE, fontSize: '12px', letterSpacing: '5px' }}>Secure Payment</span>
          <div style={{ width: '40px', height: '1px', background: BEIGE }} />
        </div>
        <h1 className="fw-bold mb-0" style={{ fontSize: '60px', color: CREAM }}>
          Check<span className="fst-italic" style={{ color: BEIGE }}>out</span>
        </h1>
      </div>

      {/* ── TICKER ── */}
      <div className="overflow-hidden py-2" style={{ background: ORANGE, whiteSpace: 'nowrap' }}>
        <span className="fst-italic d-inline-block"
              style={{ animation: 'ticker 28s linear infinite', color: CREAM, fontSize: '0.88rem', letterSpacing: '0.12em' }}>
          {Array(4).fill('✦ Secure Checkout  ·  Razorpay Payment  ·  Fast Delivery  ·  100% Safe  ·  Order Now  ·  ').join('')}
        </span>
        <style>{`
          @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
          input::placeholder, textarea::placeholder { color: rgba(168,145,110,0.45) !important; }
          input:focus, textarea:focus { border-color: rgba(232,93,4,0.55) !important; box-shadow: none !important; }
        `}</style>
      </div>

      <div className="container py-5">
        <div className="row g-5 justify-content-center">

          {/* ── BILLING FORM ── */}
          <div className="col-lg-6">
            <div className="p-4 p-md-5 rounded-4" style={{ background: CARD, border: `1px solid ${BDIM}` }}>
              <div className="mb-4">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div style={{ width: '24px', height: '1px', background: ORANGE }} />
                  <span className="fw-bold text-uppercase" style={{ color: ORANGE, fontSize: '11px', letterSpacing: '4px' }}>Billing Details</span>
                </div>
                <h3 className="fw-bold" style={{ color: CREAM, fontSize: '28px' }}>
                  Your <span className="fst-italic" style={{ color: BEIGE }}>Information</span>
                </h3>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column gap-3 mb-4">
                  {fields.map((f) => (
                    <div key={f.name}>
                      <label className="d-block fw-semibold mb-1"
                             style={{ color: TMID, fontSize: '12px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        {f.icon} &nbsp;{f.placeholder}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        value={billing[f.name]}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                  ))}

                  {/* Amount — readonly */}
                  <div>
                    <label className="d-block fw-semibold mb-1"
                           style={{ color: TMID, fontSize: '12px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      💰 &nbsp;Total Amount (INR)
                    </label>
                    <input
                      type="number"
                      name="amount"
                      value={billing.amount}
                      readOnly
                      style={{ ...inputStyle, color: ORANGE, fontWeight: '700', fontSize: '18px', cursor: 'not-allowed', opacity: 0.9 }}
                    />
                  </div>
                </div>

                <button type="submit"
                        className="btn w-100 fw-bold text-uppercase rounded-pill py-3"
                        style={{ background: ORANGE, color: CREAM, border: 'none', letterSpacing: '2px',
                                 fontSize: '14px', boxShadow: `0 8px 24px rgba(232,93,4,.4)`, transition: 'background .2s' }}
                        onMouseEnter={e => e.currentTarget.style.background = RED}
                        onMouseLeave={e => e.currentTarget.style.background = ORANGE}>
                  🔒 Pay Now — ₹{billing.amount.toFixed(2)}
                </button>

                <button type="button"
                        className="btn w-100 fw-semibold mt-3 rounded-pill py-2"
                        style={{ background: 'transparent', color: TMID, border: `1px solid ${BDIM}`, fontSize: '13px', transition: 'all .2s' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = BEIGE; e.currentTarget.style.color = BEIGE; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = BDIM; e.currentTarget.style.color = TMID; }}
                        onClick={() => navigate('/cart')}>
                  ← Back to Cart
                </button>
              </form>
            </div>
          </div>

          {/* ── ORDER SUMMARY ── */}
          <div className="col-lg-4">
            <div className="rounded-4 p-4" style={{ background: CARD, border: `1px solid ${BDIM}`, position: 'sticky', top: '100px' }}>
              <div className="d-flex align-items-center gap-2 mb-4">
                <div style={{ width: '24px', height: '1px', background: ORANGE }} />
                <span className="fw-bold text-uppercase" style={{ color: ORANGE, fontSize: '11px', letterSpacing: '4px' }}>Order Summary</span>
              </div>

              <h4 className="fw-bold mb-4" style={{ color: CREAM, fontSize: '20px' }}>Your Items</h4>

              {/* Items */}
              <div className="d-flex flex-column gap-3 mb-3">
                {cart.map((item) => (
                  <div key={item.id} className="d-flex align-items-center gap-3">
                    <div className="rounded-2 overflow-hidden flex-shrink-0"
                         style={{ width: 48, height: 48, border: `1px solid ${BDIM}` }}>
                      <img src={item.img} alt={item.title}
                           style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="flex-grow-1">
                      <div className="fw-semibold" style={{ color: CREAM, fontSize: '13px' }}>{item.title}</div>
                      <div style={{ color: TMID, fontSize: '12px' }}>× {item.quantity}</div>
                    </div>
                    <div className="fw-bold" style={{ color: BEIGE, fontSize: '13px' }}>
                      ${(parseFloat(item.price.replace("$","")) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <hr style={{ borderColor: BDIM, opacity: 1 }} />

              <div className="d-flex justify-content-between mb-2">
                <span style={{ color: TMID, fontSize: '14px' }}>Subtotal</span>
                <span className="fw-bold" style={{ color: CREAM }}>${total.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span style={{ color: TMID, fontSize: '14px' }}>Delivery</span>
                <span className="fw-semibold" style={{ color: ORANGE, fontSize: '13px' }}>FREE</span>
              </div>

              <hr style={{ borderColor: BDIM, opacity: 1 }} />

              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="fw-bold" style={{ color: CREAM, fontSize: '16px' }}>Total</span>
                <span className="fw-bold" style={{ color: ORANGE, fontSize: '24px' }}>₹{total.toFixed(2)}</span>
              </div>

              {/* Secure badge */}
              <div className="d-flex align-items-center justify-content-center gap-2 mt-4 pt-3"
                   style={{ borderTop: `1px solid ${BDIM}` }}>
                <span style={{ fontSize: '18px' }}>🔒</span>
                <span style={{ color: TLOW, fontSize: '12px', letterSpacing: '0.5px' }}>Secured by Razorpay</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;