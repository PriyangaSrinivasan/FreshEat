import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

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

const Orders = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) { navigate("/login"); return; }
    const savedOrders = JSON.parse(localStorage.getItem(`orders_${user.email}`)) || [];
    setOrders(savedOrders);
  }, [user, navigate]);

  return (
    <div style={{ background: BG, minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <div className="d-flex align-items-center justify-content-center flex-column"
           style={{ minHeight: '220px', borderBottom: `1px solid ${BDIM}` }}>
        <div className="d-flex align-items-center gap-3 mb-3">
          <div style={{ width: '40px', height: '1px', background: BEIGE }} />
          <span className="fw-bold text-uppercase" style={{ color: BEIGE, fontSize: '12px', letterSpacing: '5px' }}>History</span>
          <div style={{ width: '40px', height: '1px', background: BEIGE }} />
        </div>
        <h1 className="fw-bold mb-0" style={{ fontSize: '60px', color: CREAM }}>
          My <span className="fst-italic" style={{ color: BEIGE }}>Orders</span>
        </h1>
      </div>

      {/* ── TICKER ── */}
      <div className="overflow-hidden py-2" style={{ background: ORANGE, whiteSpace: 'nowrap' }}>
        <span className="fst-italic d-inline-block"
              style={{ animation: 'ticker 28s linear infinite', color: CREAM, fontSize: '0.88rem', letterSpacing: '0.12em' }}>
          {Array(4).fill('✦ My Orders  ·  Track Your Food  ·  Order History  ·  Fast Delivery  ·  Fresheat  ·  ').join('')}
        </span>
        <style>{`@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
      </div>

      <div className="container py-5">

        {orders.length === 0 ? (
          /* ── EMPTY STATE ── */
          <div className="d-flex flex-column align-items-center justify-content-center py-5 text-center">
            <div className="mb-4" style={{ fontSize: '80px' }}>📦</div>
            <h3 className="fw-bold mb-2" style={{ color: CREAM }}>No orders yet</h3>
            <p className="mb-4" style={{ color: TMID }}>You haven't placed any orders. Start ordering now!</p>
            <button className="btn fw-bold text-uppercase rounded-pill px-5 py-3"
                    style={{ background: ORANGE, color: CREAM, border: 'none', letterSpacing: '2px', fontSize: '13px' }}
                    onClick={() => navigate('/menu')}>
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="d-flex flex-column gap-4">

            {/* ── STATS ROW ── */}
            <div className="row g-3 mb-2">
              {[
                { num: orders.length,                                                           label: 'Total Orders'   },
                { num: `$${orders.reduce((a, o) => a + parseFloat(o.total), 0).toFixed(2)}`,   label: 'Total Spent'    },
                { num: orders.reduce((a, o) => a + (o.items?.length || 0), 0),                 label: 'Items Ordered'  },
              ].map((s, i) => (
                <div key={i} className="col-md-4">
                  <div className="rounded-4 p-4 text-center"
                       style={{ background: i === 0 ? RED : CARD, border: `1px solid ${BDIM}` }}>
                    <div className="fw-bold" style={{ fontSize: '28px', color: CREAM }}>{s.num}</div>
                    <div style={{ fontSize: '12px', letterSpacing: '1px', color: i === 0 ? 'rgba(245,237,224,.7)' : TMID, textTransform: 'uppercase' }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── ORDER CARDS ── */}
            {orders.map((order, idx) => (
              <div key={order.id} className="rounded-4 overflow-hidden"
                   style={{ background: CARD, border: `1px solid ${BDIM}` }}>

                {/* Card Header */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 px-4 py-3"
                     style={{ background: SURF, borderBottom: `1px solid ${BDIM}` }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-2 d-flex align-items-center justify-content-center fw-bold"
                         style={{ width: 36, height: 36, background: `rgba(232,93,4,0.15)`, color: ORANGE, fontSize: '13px' }}>
                      #{idx + 1}
                    </div>
                    <div>
                      <div className="fw-bold" style={{ color: CREAM, fontSize: '14px' }}>Order ID: {order.id}</div>
                      <div style={{ color: TLOW, fontSize: '12px' }}>📅 {order.date}</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    {order.paymentId && (
                      <div className="rounded-pill px-3 py-1 d-flex align-items-center gap-2"
                           style={{ background: 'rgba(34,20,9,0.8)', border: `1px solid rgba(232,93,4,0.3)` }}>
                        <span style={{ fontSize: '10px', color: ORANGE }}>✓</span>
                        <span style={{ color: TMID, fontSize: '11px', letterSpacing: '0.5px' }}>Paid</span>
                      </div>
                    )}
                    <div className="fw-bold" style={{ color: ORANGE, fontSize: '18px' }}>
                      ${order.total}
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="row g-4">

                    {/* Items */}
                    <div className="col-md-8">
                      <div className="fw-bold text-uppercase mb-3" style={{ color: TMID, fontSize: '11px', letterSpacing: '3px' }}>
                        🍽️ Items Ordered
                      </div>
                      <div className="d-flex flex-column gap-2">
                        {order.items?.map((item) => (
                          <div key={item.id} className="d-flex align-items-center gap-3 p-3 rounded-3"
                               style={{ background: SURF, border: `1px solid ${BDIM}` }}>
                            <div className="rounded-2 overflow-hidden flex-shrink-0"
                                 style={{ width: 44, height: 44, border: `1px solid ${BDIM}` }}>
                              <img src={item.img} alt={item.title}
                                   style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="flex-grow-1">
                              <div className="fw-semibold" style={{ color: CREAM, fontSize: '14px' }}>{item.title}</div>
                              <div style={{ color: TMID, fontSize: '12px' }}>× {item.quantity}</div>
                            </div>
                            <div className="fw-bold" style={{ color: BEIGE, fontSize: '14px' }}>
                              {item.price}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Billing Info */}
                    <div className="col-md-4">
                      <div className="fw-bold text-uppercase mb-3" style={{ color: TMID, fontSize: '11px', letterSpacing: '3px' }}>
                        📋 Billing Info
                      </div>
                      <div className="rounded-3 p-3" style={{ background: SURF, border: `1px solid ${BDIM}` }}>
                        {order.billing && (
                          <div className="d-flex flex-column gap-2">
                            {[
                              { icon: '👤', val: order.billing.name    },
                              { icon: '✉️', val: order.billing.email   },
                              { icon: '📞', val: order.billing.contact },
                              { icon: '📍', val: order.billing.address },
                            ].map((b, i) => b.val && (
                              <div key={i} className="d-flex align-items-start gap-2">
                                <span style={{ fontSize: '13px', flexShrink: 0 }}>{b.icon}</span>
                                <span style={{ color: TMID, fontSize: '13px', lineHeight: '1.4' }}>{b.val}</span>
                              </div>
                            ))}
                            {order.paymentId && (
                              <div className="d-flex align-items-start gap-2 mt-1 pt-2" style={{ borderTop: `1px solid ${BDIM}` }}>
                                <span style={{ fontSize: '13px' }}>🔒</span>
                                <span style={{ color: TLOW, fontSize: '11px', wordBreak: 'break-all' }}>
                                  {order.paymentId}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ))}

          </div>
        )}

        {/* ── BOTTOM CTA ── */}
        {orders.length > 0 && (
          <div className="text-center mt-5">
            <button className="btn fw-bold text-uppercase rounded-pill px-5 py-3"
                    style={{ background: ORANGE, color: CREAM, border: 'none', letterSpacing: '2px', fontSize: '13px',
                             boxShadow: `0 8px 24px rgba(232,93,4,.35)`, transition: 'background .2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = RED}
                    onMouseLeave={e => e.currentTarget.style.background = ORANGE}
                    onClick={() => navigate('/menu')}>
              Order Again →
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Orders;