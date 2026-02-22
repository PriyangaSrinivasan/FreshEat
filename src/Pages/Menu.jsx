import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsHeartFill } from "react-icons/bs";
import { WishlistContext } from "../context/WishlistContext";
import { BsMinecartLoaded } from "react-icons/bs";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

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

const Menu = () => {
  const [dishes, setDishes]         = useState([]);
  const [loading, setLoading]       = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { user }                     = useContext(AuthContext);
  const { addToCart }                = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const navigate                     = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://68f85aefdeff18f212b5dd8a.mockapi.io/fooditems")
      .then(r => r.json())
      .then(data => { setDishes(data); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

  const handleAddToCart = async (dish) => {
    if (!user) { alert("Please login first!"); navigate("/login"); return; }
    const dishForCart = { id: dish.id, title: dish.name || dish.title, price: dish.price, img: dish.img, quantity: 1 };
    addToCart(dishForCart);
    await fetch("https://68d4c636e29051d1c0ac0c3a.mockapi.io/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...dishForCart, userEmail: user.email }),
    });
    navigate("/cart");
  };

  const totalPages    = Math.ceil(dishes.length / itemsPerPage);
  const currentDishes = dishes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handlePageChange = (p) => { if (p < 1 || p > totalPages) return; setCurrentPage(p); };

  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      <style>{`
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes floatUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .menu-hero {
          min-height: 480px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          overflow: hidden;
          background:
            linear-gradient(to bottom, rgba(18,10,8,0.55) 0%, rgba(18,10,8,0.92) 100%),
            url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80")
            center/cover no-repeat;
        }
        .menu-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(232,93,4,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .dish-card { transition: transform .3s, box-shadow .3s, border-color .3s; }
        .dish-card:hover { transform: translateY(-10px); box-shadow: 0 24px 50px rgba(232,93,4,0.18); border-color: rgba(232,93,4,0.5) !important; }
        .dish-card:hover .dish-img { transform: scale(1.07); }
        .dish-img { transition: transform .4s; }
        .pg-btn { transition: all .2s; }
        .pg-btn:hover:not(:disabled) { background: ${ORANGE} !important; border-color: ${ORANGE} !important; color: white !important; }
        .pg-btn.active { background: ${ORANGE} !important; border-color: ${ORANGE} !important; color: white !important; }
        .pg-btn:disabled { opacity: 0.35; cursor: not-allowed; }
        .cart-btn:hover { background: ${ORANGE} !important; color: white !important; border-color: ${ORANGE} !important; }
        .wish-btn:hover { background: ${ORANGE} !important; color: white !important; }
      `}</style>

      {/* ── HERO — new background image ── */}
      <div className="menu-hero">
        {/* floating decorative circles */}
        <div style={{ position:'absolute', width:320, height:320, borderRadius:'50%', border:`1px solid rgba(212,182,140,0.08)`, top:'50%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', width:220, height:220, borderRadius:'50%', border:`1px solid rgba(232,93,4,0.1)`, top:'50%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none' }} />

        <div style={{ position:'relative', zIndex:2 }}>
          <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
            <div style={{ width:50, height:1, background: BEIGE }} />
            <span className="fw-bold text-uppercase" style={{ color: BEIGE, fontSize:'11px', letterSpacing:'6px' }}>Fresheat</span>
            <div style={{ width:50, height:1, background: BEIGE }} />
          </div>
          <h1 className="fw-bold mb-3" style={{ fontSize:'clamp(3.5rem,10vw,7rem)', color: CREAM, letterSpacing:'-2px', lineHeight:1 }}>
            Our <span className="fst-italic" style={{ color: BEIGE }}>Menu</span>
          </h1>
          <p className="mb-4" style={{ color: TMID, fontSize:'16px', maxWidth:'420px', margin:'0 auto 24px' }}>
            Handcrafted dishes made with the freshest ingredients — served hot to your door.
          </p>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <Link to="/" style={{ color: BEIGE, textDecoration:'none', fontSize:'14px', fontWeight:500 }}>Home</Link>
            <span style={{ color: TLOW }}>›</span>
            <span style={{ color: ORANGE, fontSize:'14px', fontWeight:600 }}>Menu</span>
          </div>
        </div>

        {/* bottom fade */}
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'80px', background:`linear-gradient(transparent, ${BG})`, pointerEvents:'none' }} />
      </div>

      {/* ── TICKER ── */}
      <div className="overflow-hidden py-2" style={{ background: ORANGE, whiteSpace:'nowrap' }}>
        <span className="fst-italic d-inline-block"
              style={{ animation:'ticker 28s linear infinite', color: CREAM, fontSize:'0.88rem', letterSpacing:'0.12em' }}>
          {Array(4).fill('✦ Chicken Pizza  ·  Fresh Pasta  ·  Grilled Burger  ·  Noodles  ·  Best Deals  ·  Order Now  ·  ').join('')}
        </span>
      </div>

      {/* ── MENU SECTION ── */}
      <section className="py-5" style={{ background: BG }}>
        <div className="container">

          {/* Section header */}
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center gap-3 mb-3">
              <div style={{ width:36, height:1, background: BEIGE }} />
              <span className="fw-bold text-uppercase" style={{ color: BEIGE, fontSize:'11px', letterSpacing:'5px' }}>Popular Dishes</span>
              <div style={{ width:36, height:1, background: BEIGE }} />
            </div>
            <h2 className="fw-bold" style={{ color: CREAM, fontSize:'clamp(1.8rem,4vw,2.8rem)', letterSpacing:'-1px' }}>
              Best <span className="fst-italic" style={{ color: BEIGE }}>Selling</span> Dishes
            </h2>
          </div>

          {loading ? (
            <div className="d-flex flex-column align-items-center justify-content-center py-5 gap-3">
              <div className="spinner-border" style={{ color: ORANGE }} role="status" />
              <span style={{ color: TMID, fontSize:'13px' }}>Loading menu…</span>
            </div>
          ) : (
            <>
              {/* ── CARDS ── */}
              <div className="row g-4">
                {currentDishes.map(dish => {
                  const wished = wishlist.find(i => i.id === dish.id);
                  return (
                    <div key={dish.id} className="col-12 col-sm-6 col-lg-4">
                      <div className="dish-card d-flex flex-column align-items-center text-center position-relative p-4 h-100 rounded-4"
                           style={{ background: CARD, border:`1px solid ${BDIM}` }}>

                        {/* Wishlist btn */}
                        <button className="wish-btn position-absolute top-0 end-0 m-3 border-0 rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width:36, height:36, background: wished ? ORANGE : 'rgba(212,182,140,0.08)', color: wished ? 'white' : TLOW, cursor:'pointer', fontSize:15, transition:'all .2s' }}
                                onClick={() => toggleWishlist(dish)}>
                          {wished ? <BsHeartFill /> : <CiHeart />}
                        </button>

                        {/* No. tag */}
                        <small className="position-absolute top-0 start-0 m-3 fst-italic"
                               style={{ color:'rgba(212,182,140,0.25)', fontSize:'0.65rem' }}>
                          No.{String(dishes.indexOf(dish) + 1).padStart(2,'0')}
                        </small>

                        {/* Image circle */}
                        <div className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center mb-3 mt-3 flex-shrink-0"
                             style={{ width:150, height:150, border:`2px solid rgba(232,93,4,0.25)`, background: SURF, boxShadow:`0 8px 30px rgba(232,93,4,0.15)` }}>
                          <img src={dish.img} alt={dish.name} className="dish-img"
                               style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                        </div>

                        <p className="fw-bold mb-1" style={{ color: CREAM, fontSize:'1rem' }}>{dish.name}</p>
                        <p className="mb-1" style={{ color: TMID, fontSize:'0.78rem', letterSpacing:'0.03em' }}>{dish.des || 'Fresh & Delicious'}</p>
                        <p className="fw-bold mb-4" style={{ color: ORANGE, fontSize:'1.1rem' }}>{dish.price}</p>

                        {/* Add to cart */}
                        <button className="cart-btn btn w-100 d-flex align-items-center justify-content-center gap-2 fw-semibold text-uppercase mt-auto rounded-3"
                                style={{ background:'transparent', color: BEIGE, border:`1px solid ${BDIM}`, fontSize:'0.73rem', letterSpacing:'0.1em', padding:'10px 0', transition:'all .22s' }}
                                onClick={() => handleAddToCart(dish)}>
                          <BsMinecartLoaded size={14} /> Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── PAGINATION ── */}
              <div className="d-flex justify-content-center align-items-center mt-5 gap-2 flex-wrap">
                <button className="pg-btn btn rounded-circle fw-bold d-flex align-items-center justify-content-center"
                        style={{ width:42, height:42, background:'transparent', border:`1px solid ${BDIM}`, color: currentPage===1 ? TLOW : BEIGE }}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}>◀</button>

                {[...Array(totalPages)].map((_, i) => (
                  <button key={i}
                          className={`pg-btn btn rounded-circle fw-bold d-flex align-items-center justify-content-center${currentPage===i+1?' active':''}`}
                          style={{ width:42, height:42, background: currentPage===i+1 ? ORANGE : 'transparent', border:`1px solid ${currentPage===i+1 ? ORANGE : BDIM}`, color: currentPage===i+1 ? 'white' : BEIGE, fontSize:'0.85rem' }}
                          onClick={() => handlePageChange(i + 1)}>
                    {i + 1}
                  </button>
                ))}

                <button className="pg-btn btn rounded-circle fw-bold d-flex align-items-center justify-content-center"
                        style={{ width:42, height:42, background:'transparent', border:`1px solid ${BDIM}`, color: currentPage===totalPages ? TLOW : BEIGE }}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}>▶</button>
              </div>

            </>
          )}
        </div>
      </section>

    </div>
  );
};

export default Menu;