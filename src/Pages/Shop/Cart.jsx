import { useContext, useEffect, useState } from "react";
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

const Cart = () => {
  const { cart, removeItem, clearCart, updateQuantity } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => { setLoading(false); }, []);

  if (loading) return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: BG }}>
      <div className="spinner-border" style={{ color: ORANGE }} role="status" />
    </div>
  );

  if (!user) { navigate("/login"); return null; }

  const total = cart.reduce(
    (acc, item) => acc + parseFloat(item.price.replace("$", "")) * item.quantity, 0
  );

  return (
    <div style={{ background: BG, minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <div className="d-flex align-items-center justify-content-center flex-column text-white"
           style={{ minHeight: '220px', borderBottom: `1px solid ${BDIM}` }}>
        <div className="d-flex align-items-center gap-3 mb-3">
          <div style={{ width: '40px', height: '1px', background: BEIGE }} />
          <span className="fw-bold text-uppercase" style={{ color: BEIGE, fontSize: '12px', letterSpacing: '5px' }}>My Order</span>
          <div style={{ width: '40px', height: '1px', background: BEIGE }} />
        </div>
        <h1 className="fw-bold mb-0" style={{ fontSize: '60px', color: CREAM }}>
          My <span className="fst-italic" style={{ color: BEIGE }}>Cart</span>
        </h1>
      </div>

      {/* ── TICKER ── */}
      <div className="overflow-hidden py-2" style={{ background: ORANGE, whiteSpace: 'nowrap' }}>
        <span className="fst-italic d-inline-block"
              style={{ animation: 'ticker 28s linear infinite', color: CREAM, fontSize: '0.88rem', letterSpacing: '0.12em' }}>
          {Array(4).fill('✦ Fresh Food  ·  Fast Delivery  ·  Best Prices  ·  Order Now  ·  Enjoy Your Meal  ·  ').join('')}
        </span>
        <style>{`
          @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
          .cart-input::placeholder { color: rgba(168,145,110,0.5); }
        `}</style>
      </div>

      <div className="container py-5">

        {cart.length === 0 ? (
          /* ── EMPTY STATE ── */
          <div className="d-flex flex-column align-items-center justify-content-center py-5 text-center">
            <div className="mb-4" style={{ fontSize: '80px' }}>🛒</div>
            <h3 className="fw-bold mb-2" style={{ color: CREAM }}>Your cart is empty</h3>
            <p className="mb-4" style={{ color: TMID }}>Looks like you haven't added anything yet.</p>
            <button className="btn fw-bold text-uppercase rounded-pill px-5 py-3"
                    style={{ background: ORANGE, color: CREAM, border: 'none', letterSpacing: '2px', fontSize: '13px' }}
                    onClick={() => navigate('/menu')}>
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="row g-5 align-items-start">

            {/* ── CART ITEMS ── */}
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div style={{ width: '28px', height: '1px', background: ORANGE }} />
                <span className="fw-bold text-uppercase" style={{ color: ORANGE, fontSize: '11px', letterSpacing: '4px' }}>
                  {cart.length} Item{cart.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="d-flex flex-column gap-3">
                {cart.map((item) => (
                  <div key={item.id} className="d-flex align-items-center gap-4 p-4 rounded-4"
                       style={{ background: CARD, border: `1px solid ${BDIM}`, transition: 'border-color .2s' }}
                       onMouseEnter={e => e.currentTarget.style.borderColor = `rgba(232,93,4,0.35)`}
                       onMouseLeave={e => e.currentTarget.style.borderColor = BDIM}>

                    {/* Image */}
                    <div className="rounded-3 overflow-hidden flex-shrink-0 d-flex align-items-center justify-content-center"
                         style={{ width: 80, height: 80, background: SURF, border: `1px solid ${BDIM}` }}>
                      <img src={item.img} alt={item.title}
                           style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Title & Price */}
                    <div className="flex-grow-1">
                      <div className="fw-bold mb-1" style={{ color: CREAM, fontSize: '16px' }}>{item.title}</div>
                      <div className="fw-bold" style={{ color: ORANGE, fontSize: '15px' }}>{item.price}</div>
                    </div>

                    {/* Quantity */}
                    <div className="d-flex align-items-center gap-2">
                      <button className="border-0 rounded-2 fw-bold d-flex align-items-center justify-content-center"
                              style={{ width: 32, height: 32, background: SURF, color: CREAM, cursor: 'pointer', fontSize: '16px', transition: 'background .2s' }}
                              onMouseEnter={e => e.currentTarget.style.background = ORANGE}
                              onMouseLeave={e => e.currentTarget.style.background = SURF}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}>
                        −
                      </button>
                      <span className="fw-bold" style={{ color: CREAM, fontSize: '16px', minWidth: '24px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button className="border-0 rounded-2 fw-bold d-flex align-items-center justify-content-center"
                              style={{ width: 32, height: 32, background: SURF, color: CREAM, cursor: 'pointer', fontSize: '16px', transition: 'background .2s' }}
                              onMouseEnter={e => e.currentTarget.style.background = ORANGE}
                              onMouseLeave={e => e.currentTarget.style.background = SURF}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="fw-bold text-end" style={{ color: BEIGE, fontSize: '16px', minWidth: '70px' }}>
                      ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                    </div>

                    {/* Remove */}
                    <button className="border-0 rounded-2 d-flex align-items-center justify-content-center flex-shrink-0"
                            style={{ width: 36, height: 36, background: 'rgba(192,57,43,0.15)', color: RED, cursor: 'pointer', fontSize: '18px', transition: 'all .2s' }}
                            onMouseEnter={e => { e.currentTarget.style.background = RED; e.currentTarget.style.color = CREAM; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(192,57,43,0.15)'; e.currentTarget.style.color = RED; }}
                            onClick={() => removeItem(item.id)}>
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* Clear Cart */}
              <div className="mt-4">
                <button className="btn fw-semibold text-uppercase px-4 py-2 rounded-pill"
                        style={{ background: 'transparent', color: TMID, border: `1px solid ${BDIM}`, fontSize: '12px', letterSpacing: '1.5px', transition: 'all .2s' }}
                        onMouseEnter={e => { e.currentTarget.style.background = RED; e.currentTarget.style.color = CREAM; e.currentTarget.style.borderColor = RED; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = TMID; e.currentTarget.style.borderColor = BDIM; }}
                        onClick={clearCart}>
                  🗑 Clear Cart
                </button>
              </div>
            </div>

            {/* ── ORDER SUMMARY ── */}
            <div className="col-lg-4">
              <div className="rounded-4 p-4" style={{ background: CARD, border: `1px solid ${BDIM}`, position: 'sticky', top: '100px' }}>
                <div className="d-flex align-items-center gap-2 mb-4">
                  <div style={{ width: '24px', height: '1px', background: ORANGE }} />
                  <span className="fw-bold text-uppercase" style={{ color: ORANGE, fontSize: '11px', letterSpacing: '4px' }}>Summary</span>
                </div>

                <h4 className="fw-bold mb-4" style={{ color: CREAM, fontSize: '22px' }}>Order Summary</h4>

                {/* Item rows */}
                <div className="d-flex flex-column gap-2 mb-3">
                  {cart.map(item => (
                    <div key={item.id} className="d-flex justify-content-between align-items-center">
                      <span style={{ color: TMID, fontSize: '13px' }}>{item.title} × {item.quantity}</span>
                      <span className="fw-semibold" style={{ color: CREAM, fontSize: '13px' }}>
                        ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <hr style={{ borderColor: BDIM, opacity: 1 }} />

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span style={{ color: TMID, fontSize: '14px' }}>Subtotal</span>
                  <span className="fw-bold" style={{ color: CREAM }}>${total.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span style={{ color: TMID, fontSize: '14px' }}>Delivery</span>
                  <span className="fw-semibold" style={{ color: ORANGE, fontSize: '13px' }}>FREE</span>
                </div>

                <hr style={{ borderColor: BDIM, opacity: 1 }} />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="fw-bold" style={{ color: CREAM, fontSize: '16px' }}>Total</span>
                  <span className="fw-bold" style={{ color: ORANGE, fontSize: '22px' }}>${total.toFixed(2)}</span>
                </div>

                <button className="btn w-100 fw-bold text-uppercase rounded-pill py-3"
                        style={{ background: ORANGE, color: CREAM, border: 'none', letterSpacing: '2px', fontSize: '13px',
                                 boxShadow: `0 8px 24px rgba(232,93,4,.35)`, transition: 'background .2s' }}
                        onMouseEnter={e => e.currentTarget.style.background = RED}
                        onMouseLeave={e => e.currentTarget.style.background = ORANGE}
                        onClick={() => navigate('/checkout')}>
                  Proceed to Checkout →
                </button>

                <button className="btn w-100 fw-semibold mt-3 rounded-pill py-2"
                        style={{ background: 'transparent', color: TMID, border: `1px solid ${BDIM}`, fontSize: '13px', transition: 'all .2s' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = BEIGE; e.currentTarget.style.color = BEIGE; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = BDIM; e.currentTarget.style.color = TMID; }}
                        onClick={() => navigate('/menu')}>
                  ← Continue Shopping
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;