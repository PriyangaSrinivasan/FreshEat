
import { useState, useEffect, useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { BsHeartFill } from "react-icons/bs";
import { WishlistContext } from "../context/WishlistContext";
import { BsMinecartLoaded } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const item1 = "/assets/item1_1.png";
const item3 = "/assets/item1_3.png";
const item5 = "/assets/dishes2_5.webp";
const item6 = "/assets/dishes1_4.webp";
const item7 = "/assets/dishes1_5.webp";
const img1icon = "/assets/img1icon.png";
const img1 = "/assets/img1.png";
const img2 = "/assets/img2.png";
const img3 = "/assets/img3.png";
const leaf = "/assets/leafimg.svg";
const pepper = "/assets/pepper.svg";
const green1 = "/assets/imggreen.svg";
const green2 = "/assets/green2img.svg";
const shape1 = "/assets/bannerShape1_3.svg";
const shape2 = "/assets/bannerShape1_6.svg";
const pizzashape = "/assets/itemsShape1_2.png";
const burgershape = "/assets/bestFooditemsShape1_1.png";

const ORANGE = "#e85d04";
const BG     = "#120a08";
const SURF   = "#1c1008";
const CARD   = "#221409";
const CREAM  = "#f5ede0";
const BEIGE  = "#d4b68c";
const TLOW   = "#6b5540";
const TMID   = "#a8916e";
const BDIM   = "rgba(212,182,140,0.12)";

const foods = [
  { img: item3, title: "Chicken Fried Rice", price: "$100.99" },
  { img: item5, title: "Chinese Pasta",       price: "$15.99"  },
  { img: item1, title: "Chicken Pizza",        price: "$26.99"  },
  { img: item6, title: "Chicken Noodles",      price: "$39.00"  },
  { img: item7, title: "Grilled Chicken",      price: "$20.99"  },
];

const Home = () => {
  const { addToCart }                = useContext(CartContext);
  const { user }                     = useContext(AuthContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const [data, setData]              = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    Promise.all([
      fetch("https://68f85aefdeff18f212b5dd8a.mockapi.io/dishes").then(r => r.json()),
      fetch("https://68f85aefdeff18f212b5dd8a.mockapi.io/fooditems").then(r => r.json()),
      fetch("https://68f86136deff18f212b5f1e7.mockapi.io/categories").then(r => r.json()),
      fetch("https://68d4c636e29051d1c0ac0c3a.mockapi.io/api/items").then(r => r.json()),
    ])
      .then(([dishes, fooditems, categories, items]) =>
        setData({ dishes, fooditems, categories, items })
      )
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  if (!data) return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center gap-3"
      style={{ background: BG }}>
      <div className="spinner-border" style={{ color: ORANGE }} role="status" />
      <p className="fst-italic mb-0" style={{ color: TLOW, fontSize: "0.9rem" }}>Loading the menu…</p>
    </div>
  );

  const filteredItems = selectedCategory === "All"
    ? data.fooditems
    : data.fooditems.filter(item => item.title === selectedCategory);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet:  { breakpoint: { max: 1024, min: 768  }, items: 2 },
    mobile:  { breakpoint: { max: 768,  min: 0    }, items: 1 },
  };

  return (
    <div style={{ background: BG }}>

      {/* ══ SECTION 1 — BANNER CAROUSEL ══ */}
      <section className="home-page position-relative">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            {[img1, img3, img2].map((imgSrc, idx) => (
              <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                <img className="d-none d-xxl-block position-absolute top-0 start-0" src={pepper} width={230} />
                <img className="d-none d-xxl-block position-absolute top-0 end-0" src={leaf} width={200} />
                <div className="shapes">
                  <img className="shape1 d-none d-xxl-block" src={shape1} width={230} />
                  <img className="shape2 d-none d-xxl-block" src={shape2} width={100} />
                </div>
                <img className="d-none d-xxl-block position-absolute bottom-0 start-0" src={green1} width={230} />
                <img className="d-none d-xxl-block position-absolute bottom-0 end-0" src={green2} width={160} />

                <div className="home-content row d-flex justify-content-end align-items-center ps-4 position-absolute w-100">
                  <div className="col-12 col-xxl-6 ps-5">
                    <span className="badge rounded-pill px-3 py-2 mb-3 d-inline-block fw-semibold text-uppercase"
                      style={{ background: "rgba(232,93,4,0.18)", color: BEIGE, border: `1px solid rgba(232,93,4,0.35)`, letterSpacing: "0.15em", fontSize: "0.68rem" }}>
                      ● Welcome to Fresheat
                    </span>

                    <h1 className="fw-bold lh-1 mb-4"
                      style={{ fontSize: "clamp(3rem,8vw,7rem)", color: CREAM, letterSpacing: -1 }}>
                      SPICY FRIED
                      <span className="d-block fst-italic" style={{ color: BEIGE }}>CHICKEN</span>
                    </h1>

                    <div className="d-flex gap-4 py-3 mb-4"
                      style={{ borderTop: `1px solid ${BDIM}`, borderBottom: `1px solid ${BDIM}` }}>
                      {[["50+","Menu Items"],["4.9★","Rating"],["30 min","Delivery"]].map(([n, l]) => (
                        <div key={l}>
                          <span className="d-block fw-bold fs-4" style={{ color: ORANGE }}>{n}</span>
                          <span className="text-uppercase" style={{ fontSize: "0.62rem", letterSpacing: "0.15em", color: TLOW }}>{l}</span>
                        </div>
                      ))}
                    </div>

                    <div className="d-flex gap-3 flex-wrap">
                      <Link
                        to="/menu"
                        className="btn fw-bold px-5 py-3 text-uppercase rounded-3"
                        style={{ background: ORANGE, color: "white", letterSpacing: "0.1em", fontSize: "0.9rem", border: "none", textDecoration: "none" }}
                        onClick={e => e.stopPropagation()}
                      >
                        Order Now
                      </Link>
                      <Link
                        to="/menu"
                        className="btn fw-medium px-4 py-3 rounded-3"
                        style={{ background: "transparent", color: BEIGE, border: `1px solid rgba(212,182,140,0.4)`, fontSize: "0.9rem", textDecoration: "none" }}
                        onClick={e => e.stopPropagation()}
                      >
                        View Menu →
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 d-none d-xxl-block">
                    <img src={imgSrc} width="96%" style={{ filter: "drop-shadow(0 20px 60px rgba(232,93,4,0.25))" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-indicators" style={{ bottom: 24 }}>
            {[0,1,2].map(i => (
              <button key={i} type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                style={{ width: i === 0 ? 32 : 8, height: 8, borderRadius: 50, border: "none", background: i === 0 ? ORANGE : "rgba(212,182,140,0.3)", transition: "all 0.3s" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <div className="overflow-hidden py-2" style={{ background: ORANGE, whiteSpace: "nowrap" }}>
        <span className="fst-italic d-inline-block"
          style={{ animation: "ticker 30s linear infinite", color: "white", fontSize: "0.88rem", letterSpacing: "0.12em" }}>
          {Array(4).fill("✦ Welcome to Fresheat  ·  Best Food in Town  ·  Fresh Ingredients Daily  ·  Warm & Fast Delivery  ·  Order Now  ·  ").join("")}
        </span>
        <style>{`@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
      </div>

      {/* ══ SECTION 2 — POPULAR FOOD ITEMS ══ */}
      <section className="py-5 position-relative" style={{ background: BG, borderBottom: `1px solid ${BDIM}` }}>
        <img src={pizzashape} className="position-absolute d-none d-xxl-block" style={{ top: "90px", right: "100px" }} width={180} />
        <img src={burgershape} className="position-absolute d-none d-xxl-block" style={{ bottom: "40%", left: "0" }} width={200} />

        <div className="container mb-4">
          {/* Section label */}
          <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
            <div style={{ width: 36, height: 1, background: BEIGE }} />
            <img src={img1icon} width={28} />
            <span className="fw-bold text-uppercase" style={{ color: ORANGE, letterSpacing: "0.18em", fontSize: "0.68rem" }}>Best Food</span>
            <img src={img1icon} width={28} />
            <div style={{ width: 36, height: 1, background: BEIGE }} />
          </div>
          <h2 className="text-center fw-bold mb-5" style={{ color: CREAM, fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
            Popular Food <span className="fst-italic" style={{ color: BEIGE }}>Items</span>
          </h2>

          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2200} keyBoardControl showDots={false} arrows={false}>
            {data.items.map(item => (
              <div key={item.id} className="mx-2 rounded-3 overflow-hidden"
                style={{ background: CARD, border: `1px solid ${BDIM}` }}>
                {/* Image area */}
                <div className="d-flex align-items-center justify-content-center position-relative py-4"
                  style={{ background: `radial-gradient(circle, rgba(232,93,4,0.1), transparent 70%)`, borderBottom: `1px solid ${BDIM}`, minHeight: 150 }}>
                  <span className="badge rounded-pill position-absolute top-0 start-0 m-2 fw-bold"
                    style={{ background: ORANGE, fontSize: "0.58rem", letterSpacing: "0.1em" }}>NEW</span>
                  <img src={item.img} alt={item.title} style={{ width: 110, height: 110, objectFit: "contain" }} />
                </div>
                {/* Body */}
                <div className="p-3">
                  <p className="fw-semibold mb-1 text-truncate" style={{ color: CREAM, fontSize: "0.92rem" }}>{item.title}</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fw-bold" style={{ color: ORANGE, fontSize: "1rem" }}>{item.price}</span>
                    <button
                      className="btn btn-sm rounded-2 d-flex align-items-center justify-content-center"
                      style={{ width: 32, height: 32, background: ORANGE, border: "none", color: "white", fontSize: 13 }}
                      onClick={() => addToCart({ id: item.id, title: item.title, price: item.price, img: item.img })}>
                      <BsMinecartLoaded />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ══ SECTION 3 — BEST SELLING DISHES ══ */}
      <section style={{
        backgroundImage: `linear-gradient(rgba(18,10,8,0.85), rgba(28,16,8,0.9)), url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80")`,
        backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed",
        padding: "80px 0", borderBottom: `1px solid ${BDIM}`
      }}>
        <div className="container">
          {/* Section label */}
          <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
            <div style={{ width: 36, height: 1, background: BEIGE }} />
            <img src={img1icon} width={28} />
            <span className="fw-bold text-uppercase" style={{ color: ORANGE, letterSpacing: "0.18em", fontSize: "0.68rem" }}>Popular Dishes</span>
            <img src={img1icon} width={28} />
            <div style={{ width: 36, height: 1, background: BEIGE }} />
          </div>
          <h2 className="text-center fw-bold mb-5" style={{ color: CREAM, fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
            Best <span className="fst-italic" style={{ color: BEIGE }}>Selling</span> Dishes
          </h2>

          {/* Row 1 — 3 cards */}
          <div className="row g-4 justify-content-center mb-4">
            {foods.slice(0, 3).map((dish, idx) => {
              const id = dish.id || dish.title.replace(/\s+/g, "-");
              const wished = wishlist.find(i => i.id === id && i.userEmail === user?.email);
              return (
                <div key={idx} className="col-12 col-sm-6 col-md-4">
                  <div
                    className="p-3 d-flex flex-column align-items-center text-center position-relative h-100"
                    style={{ background: CARD, border: `1px solid ${BDIM}`, borderRadius: 16, transition: "transform 0.28s, box-shadow 0.28s, border-color 0.28s" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.6)"; e.currentTarget.style.borderColor = "rgba(192,57,43,0.45)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = BDIM; }}
                  >
                    <small className="position-absolute top-0 start-0 m-2 fst-italic" style={{ color: "rgba(212,182,140,0.3)", fontSize: "0.65rem" }}>
                      No.{String(idx+1).padStart(2,"0")}
                    </small>
                    <button
                      className="position-absolute top-0 end-0 m-2 border-0 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: 30, height: 30, background: wished ? ORANGE : "rgba(212,182,140,0.08)", color: wished ? "white" : TLOW, cursor: "pointer", fontSize: 13, transition: "all 0.2s" }}
                      onMouseEnter={e => { if (!wished) { e.currentTarget.style.background = ORANGE; e.currentTarget.style.color = "white"; }}}
                      onMouseLeave={e => { if (!wished) { e.currentTarget.style.background = "rgba(212,182,140,0.08)"; e.currentTarget.style.color = TLOW; }}}
                      onClick={() => { if (!user) { alert("Please login first!"); return; } toggleWishlist({ ...dish, id }); }}>
                      {wished ? <BsHeartFill /> : <CiHeart />}
                    </button>
                    <div className="rounded-circle d-flex align-items-center justify-content-center mb-3 position-relative mt-3"
                      style={{ width: 120, height: 120, border: `1px solid rgba(192,57,43,0.3)`, background: `radial-gradient(circle, rgba(192,57,43,0.09), ${SURF})` }}>
                      <div className="rounded-circle position-absolute" style={{ inset: 8, border: "1px dashed rgba(212,182,140,0.2)" }} />
                      <img src={dish.img} alt={dish.title} style={{ width: 85, objectFit: "contain", position: "relative", zIndex: 1 }} />
                    </div>
                    <p className="fw-semibold mb-1" style={{ color: CREAM, fontSize: "0.95rem" }}>{dish.title}</p>
                    <p className="fw-bold mb-3" style={{ color: ORANGE, fontSize: "0.95rem" }}>{dish.price}</p>
                    <button
                      className="btn w-100 d-flex align-items-center justify-content-center gap-2 fw-semibold text-uppercase"
                      style={{ background: "transparent", color: TMID, border: `1px solid ${BDIM}`, fontSize: "0.72rem", letterSpacing: "0.1em", padding: "8px 0", borderRadius: 8, transition: "all 0.22s" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#c0392b"; e.currentTarget.style.color = CREAM; e.currentTarget.style.borderColor = "#c0392b"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = TMID; e.currentTarget.style.borderColor = BDIM; }}
                      onClick={() => addToCart({ id: idx, title: dish.title, price: dish.price, img: dish.img })}>
                      <BsMinecartLoaded size={12} /> Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2 — 2 cards centered */}
          <div className="row g-4 justify-content-center">
            {foods.slice(3).map((dish, idx) => {
              const realIdx = idx + 3;
              const id = dish.id || dish.title.replace(/\s+/g, "-");
              const wished = wishlist.find(i => i.id === id && i.userEmail === user?.email);
              return (
                <div key={realIdx} className="col-12 col-sm-6 col-md-4">
                  <div
                    className="p-3 d-flex flex-column align-items-center text-center position-relative h-100"
                    style={{ background: CARD, border: `1px solid ${BDIM}`, borderRadius: 16, transition: "transform 0.28s, box-shadow 0.28s, border-color 0.28s" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.6)"; e.currentTarget.style.borderColor = "rgba(192,57,43,0.45)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = BDIM; }}
                  >
                    <small className="position-absolute top-0 start-0 m-2 fst-italic" style={{ color: "rgba(212,182,140,0.3)", fontSize: "0.65rem" }}>
                      No.{String(realIdx+1).padStart(2,"0")}
                    </small>
                    <button
                      className="position-absolute top-0 end-0 m-2 border-0 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: 30, height: 30, background: wished ? ORANGE : "rgba(212,182,140,0.08)", color: wished ? "white" : TLOW, cursor: "pointer", fontSize: 13, transition: "all 0.2s" }}
                      onMouseEnter={e => { if (!wished) { e.currentTarget.style.background = ORANGE; e.currentTarget.style.color = "white"; }}}
                      onMouseLeave={e => { if (!wished) { e.currentTarget.style.background = "rgba(212,182,140,0.08)"; e.currentTarget.style.color = TLOW; }}}
                      onClick={() => { if (!user) { alert("Please login first!"); return; } toggleWishlist({ ...dish, id }); }}>
                      {wished ? <BsHeartFill /> : <CiHeart />}
                    </button>
                    <div className="rounded-circle d-flex align-items-center justify-content-center mb-3 position-relative mt-3"
                      style={{ width: 120, height: 120, border: `1px solid rgba(192,57,43,0.3)`, background: `radial-gradient(circle, rgba(192,57,43,0.09), ${SURF})` }}>
                      <div className="rounded-circle position-absolute" style={{ inset: 8, border: "1px dashed rgba(212,182,140,0.2)" }} />
                      <img src={dish.img} alt={dish.title} style={{ width: 85, objectFit: "contain", position: "relative", zIndex: 1 }} />
                    </div>
                    <p className="fw-semibold mb-1" style={{ color: CREAM, fontSize: "0.95rem" }}>{dish.title}</p>
                    <p className="fw-bold mb-3" style={{ color: ORANGE, fontSize: "0.95rem" }}>{dish.price}</p>
                    <button
                      className="btn w-100 d-flex align-items-center justify-content-center gap-2 fw-semibold text-uppercase"
                      style={{ background: "transparent", color: TMID, border: `1px solid ${BDIM}`, fontSize: "0.72rem", letterSpacing: "0.1em", padding: "8px 0", borderRadius: 8, transition: "all 0.22s" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#c0392b"; e.currentTarget.style.color = CREAM; e.currentTarget.style.borderColor = "#c0392b"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = TMID; e.currentTarget.style.borderColor = BDIM; }}
                      onClick={() => addToCart({ id: realIdx, title: dish.title, price: dish.price, img: dish.img })}>
                      <BsMinecartLoaded size={12} /> Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ SECTION 4 — FOOD MENU FILTER ══ */}
      <section className="py-5" style={{ background: SURF }}>
        <div className="container">
          {/* Section label */}
          <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
            <div style={{ width: 36, height: 1, background: BEIGE }} />
            <img src={img1icon} width={28} />
            <span className="fw-bold text-uppercase" style={{ color: ORANGE, letterSpacing: "0.18em", fontSize: "0.68rem" }}>Food Menu</span>
            <img src={img1icon} width={28} />
            <div style={{ width: 36, height: 1, background: BEIGE }} />
          </div>
          <h2 className="text-center fw-bold mb-5" style={{ color: CREAM, fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
            Fresheat <span className="fst-italic" style={{ color: BEIGE }}>Foods</span> Menu
          </h2>

          {/* Category pills — Bootstrap btn-group style */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            <button
              className="btn btn-sm rounded-pill fw-semibold d-flex align-items-center gap-2 px-4 py-2"
              style={{ background: selectedCategory === "All" ? ORANGE : "transparent", color: selectedCategory === "All" ? "white" : TMID, border: `1px solid ${selectedCategory === "All" ? ORANGE : BDIM}`, fontSize: "0.82rem" }}
              onClick={() => setSelectedCategory("All")}>
              <img src={img1icon} style={{ width: 18 }} /> All Items
            </button>
            {data.categories.map(cat => (
              <button key={cat.id}
                className="btn btn-sm rounded-pill fw-semibold d-flex align-items-center gap-2 px-4 py-2"
                style={{ background: selectedCategory === cat.name ? ORANGE : "transparent", color: selectedCategory === cat.name ? "white" : TMID, border: `1px solid ${selectedCategory === cat.name ? ORANGE : BDIM}`, fontSize: "0.82rem" }}
                onClick={() => setSelectedCategory(cat.name)}>
                <img src={cat.img} style={{ width: 18, height: 18, objectFit: "contain" }} />
                {cat.name}
              </button>
            ))}
          </div>

          <hr style={{ borderColor: BDIM, opacity: 1, marginBottom: 32 }} />

          {/* Menu rows */}
          <div className="row g-0">
            {filteredItems.map(item => (
              <div key={item.id} className="col-12 col-md-6 p-1">
                <div className="d-flex align-items-center gap-3 p-3 rounded-3"
                  style={{ border: `1px solid ${BDIM}`, background: "transparent", transition: "background 0.18s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(232,93,4,0.06)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <img src={item.img} alt={item.name}
                    style={{ width: 68, height: 68, objectFit: "cover", flexShrink: 0, border: `1px solid ${BDIM}`, borderRadius: 10 }} />
                  <div className="flex-grow-1 overflow-hidden">
                    <Link to="/menu" className="d-block fw-semibold text-decoration-none text-truncate"
                      style={{ color: CREAM, fontSize: "0.95rem" }}>
                      {item.name}
                    </Link>
                    <p className="mb-1 text-truncate" style={{ fontSize: "0.73rem", color: TLOW }}>{item.des || ""}</p>
                    <span className="fw-bold" style={{ color: ORANGE, fontSize: "0.9rem" }}>{item.price}</span>
                  </div>
                  <button
                    className="btn btn-sm rounded-2 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 36, height: 36, border: `1px solid ${BDIM}`, background: "transparent", color: TLOW, fontSize: 14 }}
                    onMouseEnter={e => { e.currentTarget.style.background = ORANGE; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = ORANGE; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = TLOW; e.currentTarget.style.borderColor = BDIM; }}
                    onClick={() => addToCart({ id: item.id, title: item.name, price: item.price, img: item.img })}>
                    <BsMinecartLoaded />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;



