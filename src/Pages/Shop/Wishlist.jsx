import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { BsMinecartLoaded } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

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

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleMoveToCart = async (item) => {
    if (!user) { alert("Please login first!"); navigate("/login"); return; }
    const itemForCart = { id: item.id, title: item.name || item.title, price: item.price, img: item.img, quantity: 1 };
    try {
      addToCart(itemForCart);
      await fetch("https://68d4c636e29051d1c0ac0c3a.mockapi.io/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...itemForCart, userEmail: user.email }),
      });
      removeFromWishlist(item.id);
    } catch (error) {
      console.error("Error moving item to cart:", error);
    }
  };

  const handleRemove = (item) => {
    if (!user) { alert("Please login first!"); navigate("/login"); return; }
    removeFromWishlist(item.id);
  };

  const userWishlist = wishlist.filter((i) => i.userEmail === user?.email);

  /* ── Not logged in ── */
  if (!user) return (
    <div style={{ background: BG, minHeight: '100vh' }} className="d-flex flex-column align-items-center justify-content-center text-center py-5">
      <div style={{ fontSize: '70px' }} className="mb-4">🔒</div>
      <h3 className="fw-bold mb-2" style={{ color: CREAM }}>Please login first</h3>
      <p className="mb-4" style={{ color: TMID }}>Login to view your wishlist.</p>
      <Link to="/login" className="btn fw-bold text-uppercase rounded-pill px-5 py-3"
            style={{ background: ORANGE, color: CREAM, border: 'none', letterSpacing: '2px', fontSize: '13px' }}>
        Login
      </Link>
    </div>
  );

  return (
    <div style={{ background: BG, minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <div className="d-flex align-items-center justify-content-center flex-column"
           style={{ minHeight: '220px', borderBottom: `1px solid ${BDIM}` }}>
        <div className="d-flex align-items-center gap-3 mb-3">
          <div style={{ width: '40px', height: '1px', background: BEIGE }} />
          <span className="fw-bold text-uppercase" style={{ color: BEIGE, fontSize: '12px', letterSpacing: '5px' }}>Saved Items</span>
          <div style={{ width: '40px', height: '1px', background: BEIGE }} />
        </div>
        <h1 className="fw-bold mb-0" style={{ fontSize: '60px', color: CREAM }}>
          My <span className="fst-italic" style={{ color: BEIGE }}>Wishlist</span>
        </h1>
      </div>

      {/* ── TICKER ── */}
      <div className="overflow-hidden py-2" style={{ background: ORANGE, whiteSpace: 'nowrap' }}>
        <span className="fst-italic d-inline-block"
              style={{ animation: 'ticker 28s linear infinite', color: CREAM, fontSize: '0.88rem', letterSpacing: '0.12em' }}>
          {Array(4).fill('✦ My Wishlist  ·  Saved Favourites  ·  Move to Cart  ·  Best Deals  ·  Fresheat  ·  ').join('')}
        </span>
        <style>{`@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
      </div>

      <div className="container py-5">

        {/* ── EMPTY STATE ── */}
        {userWishlist.length === 0 ? (
          <div className="d-flex flex-column align-items-center justify-content-center py-5 text-center">
            <div style={{ fontSize: '80px' }} className="mb-4">🤍</div>
            <h3 className="fw-bold mb-2" style={{ color: CREAM }}>Your wishlist is empty</h3>
            <p className="mb-4" style={{ color: TMID }}>Save your favourite dishes and order them anytime!</p>
            <Link to="/menu" className="btn fw-bold text-uppercase rounded-pill px-5 py-3"
                  style={{ background: ORANGE, color: CREAM, border: 'none', letterSpacing: '2px', fontSize: '13px' }}>
              Browse Menu
            </Link>
          </div>
        ) : (
          <>
            {/* Count label */}
            <div className="d-flex align-items-center gap-2 mb-4">
              <div style={{ width: '28px', height: '1px', background: ORANGE }} />
              <span className="fw-bold text-uppercase" style={{ color: ORANGE, fontSize: '11px', letterSpacing: '4px' }}>
                {userWishlist.length} Saved Item{userWishlist.length > 1 ? 's' : ''}
              </span>
            </div>

            {/* ── WISHLIST GRID ── */}
            <div className="row g-4">
              {userWishlist.map((item) => (
                <div key={item.id} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="rounded-4 overflow-hidden h-100"
                       style={{ background: CARD, border: `1px solid ${BDIM}`, transition: 'transform .3s, border-color .3s' }}
                       onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = `rgba(232,93,4,0.4)`; }}
                       onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = BDIM; }}>

                    {/* Image */}
                    <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                      <img src={item.img} alt={item.name || item.title}
                           style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .4s' }}
                           onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
                           onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                      {/* heart badge */}
                      <div className="position-absolute top-0 end-0 m-3 rounded-circle d-flex align-items-center justify-content-center"
                           style={{ width: 36, height: 36, background: 'rgba(18,10,8,0.75)', fontSize: '16px' }}>
                        ❤️
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-4">
                      <h5 className="fw-bold mb-1" style={{ color: CREAM, fontSize: '16px' }}>
                        {item.name || item.title}
                      </h5>
                      <div className="fw-bold mb-4" style={{ color: ORANGE, fontSize: '18px' }}>{item.price}</div>

                      <div className="d-flex gap-2">
                        {/* Move to Cart */}
                        <button className="btn flex-grow-1 fw-bold d-flex align-items-center justify-content-center gap-2 rounded-pill py-2"
                                style={{ background: ORANGE, color: CREAM, border: 'none', fontSize: '13px', letterSpacing: '0.5px', transition: 'background .2s' }}
                                onMouseEnter={e => e.currentTarget.style.background = RED}
                                onMouseLeave={e => e.currentTarget.style.background = ORANGE}
                                onClick={() => handleMoveToCart(item)}>
                          <BsMinecartLoaded size={15} /> Move to Cart
                        </button>

                        {/* Remove */}
                        <button className="btn d-flex align-items-center justify-content-center rounded-pill px-3"
                                style={{ background: 'rgba(192,57,43,0.15)', color: RED, border: `1px solid rgba(192,57,43,0.3)`, fontSize: '18px', transition: 'all .2s' }}
                                onMouseEnter={e => { e.currentTarget.style.background = RED; e.currentTarget.style.color = CREAM; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(192,57,43,0.15)'; e.currentTarget.style.color = RED; }}
                                onClick={() => handleRemove(item)}>
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* ── BOTTOM CTA ── */}
            <div className="text-center mt-5">
              <Link to="/menu" className="btn fw-bold text-uppercase rounded-pill px-5 py-3"
                    style={{ background: 'transparent', color: TMID, border: `1px solid ${BDIM}`, fontSize: '13px', letterSpacing: '2px', transition: 'all .2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = BEIGE; e.currentTarget.style.color = BEIGE; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = BDIM; e.currentTarget.style.color = TMID; }}>
                ← Continue Browsing
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;