
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { BsCart3, BsHeartFill, BsPersonFill, BsChevronDown } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import logo from "/assets/logo.svg";

const NavItem = ({ to, label, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="text-decoration-none d-inline-block px-3"
        style={({ isActive }) => ({
          fontSize: "0.95rem",
          fontWeight: 500,
          letterSpacing: "0.04em",
          color: isActive ? "#e85d04" : hovered ? "#e85d04" : "#adb5bd",
          transform: hovered ? "translateY(-3px)" : "translateY(0px)",
          transition: "color 0.25s ease, transform 0.25s ease",
          display: "inline-block",
        })}
      >
        {label}
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { wishlist } = useContext(WishlistContext);
  const { totalItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [shopHovered, setShopHovered] = useState(false);

  const userWishlist = user
    ? wishlist.filter((item) => item.userEmail === user.email)
    : wishlist;

  const handleClose = () => {
    setIsOpen(false);
    setShopOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <style>{`
        .shop-drop-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          font-size: 0.88rem;
          color: #adb5bd;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .shop-drop-item:hover {
          background-color: #2a2a2a;
          color: #e85d04;
        }
      `}</style>

      {/* Announcement bar */}
      <div
        className="w-100 d-flex justify-content-center align-items-center py-1"
        style={{ backgroundColor: "#e85d04", fontSize: "0.78rem", letterSpacing: "0.08em", color: "white" }}
      >
        🔥 Free delivery on orders above ₹499 — Use code <strong className="ms-1">FIRSTBITE</strong>
      </div>

      <nav
        className="navbar navbar-expand-lg px-4 px-lg-5"
        style={{ backgroundColor: "#0d0d0d", borderBottom: "1px solid #222", minHeight: "70px" }}
      >
        <div className="container-fluid px-0">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" height="44" />
          </Link>

          {/* Mobile icons */}
          <div className="d-flex d-lg-none align-items-center gap-3 ms-auto me-3">
            <NavLink className="position-relative text-white" to="/cart">
              <BsCart3 size={22} />
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.6rem" }}>{totalItems}</span>
              )}
            </NavLink>
            <NavLink className="position-relative" to="/wishlist">
              {userWishlist.length > 0 ? <BsHeartFill size={20} color="#e85d04" /> : <CiHeart size={24} color="white" />}
              {userWishlist.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.6rem" }}>{userWishlist.length}</span>
              )}
            </NavLink>
          </div>

          {/* Hamburger */}
          <button className="border-0 bg-transparent d-lg-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle">
            {isOpen ? <HiX size={28} color="white" /> : <HiMenuAlt3 size={28} color="white" />}
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-1 mt-3 mt-lg-0">

              {navLinks.map(({ to, label }) => (
                <NavItem key={to} to={to} label={label} onClick={handleClose} />
              ))}

              {/* Shop dropdown */}
              <li className="nav-item position-relative">
                <button
                  className="border-0 bg-transparent px-3 d-inline-flex align-items-center gap-1"
                  onClick={() => setShopOpen(!shopOpen)}
                  onMouseEnter={() => setShopHovered(true)}
                  onMouseLeave={() => setShopHovered(false)}
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    color: shopOpen || shopHovered ? "#e85d04" : "#adb5bd",
                    transform: shopHovered ? "translateY(-3px)" : "translateY(0px)",
                    transition: "color 0.25s ease, transform 0.25s ease",
                  }}
                >
                  Shop
                  <BsChevronDown
                    size={11}
                    style={{
                      transition: "transform 0.3s ease",
                      transform: shopOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                {shopOpen && (
                  <ul
                    className="list-unstyled position-absolute rounded-3 py-2 shadow-lg"
                    style={{ top: "110%", left: 0, minWidth: "190px", backgroundColor: "#1a1a1a", border: "1px solid #333", zIndex: 9999 }}
                  >
                    {[
                      { to: "/cart", label: "Cart", badge: totalItems },
                      { to: "/checkout", label: "Checkout", badge: null },
                      { to: "/orders", label: "My Orders", badge: null },
                      { to: "/wishlist", label: "Wishlist", badge: userWishlist.length },
                    ].map(({ to, label, badge }) => (
                      <li key={to}>
                        <NavLink to={to} onClick={handleClose} className="shop-drop-item">
                          {label}
                          {badge > 0 && (
                            <span className="badge rounded-pill" style={{ backgroundColor: "#e85d04", fontSize: "0.65rem" }}>{badge}</span>
                          )}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>

            {/* Right side */}
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              <div className="d-none d-lg-flex align-items-center gap-3">
                <NavLink className="position-relative" to="/wishlist">
                  {userWishlist.length > 0 ? <BsHeartFill size={22} color="#e85d04" /> : <CiHeart size={26} color="#adb5bd" />}
                  {userWishlist.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.6rem" }}>{userWishlist.length}</span>
                  )}
                </NavLink>
                <NavLink className="position-relative" to="/cart">
                  <BsCart3 size={22} color="#adb5bd" />
                  {totalItems > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.6rem" }}>{totalItems}</span>
                  )}
                </NavLink>
              </div>

              <div className="d-none d-lg-block" style={{ width: "1px", height: "28px", backgroundColor: "#333" }} />

              {!user ? (
                <NavLink
                  to="/login"
                  className="btn btn-sm fw-semibold px-4 py-2 rounded-pill"
                  style={{ backgroundColor: "#e85d04", color: "white", border: "none", fontSize: "0.875rem" }}
                >
                  Login
                </NavLink>
              ) : (
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex align-items-center gap-2 rounded-pill px-3 py-1" style={{ backgroundColor: "#1a1a1a", border: "1px solid #333" }}>
                    <BsPersonFill size={14} color="#e85d04" />
                    <span className="fw-medium" style={{ color: "white", fontSize: "0.85rem" }}>{user.name}</span>
                  </div>
                  <button
                    className="btn btn-sm rounded-pill px-3"
                    style={{ border: "1px solid #e85d04", color: "#e85d04", backgroundColor: "transparent", fontSize: "0.8rem" }}
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;