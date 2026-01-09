import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { BsCart3, BsHeartFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import logo from "/assets/logo.svg";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { wishlist } = useContext(WishlistContext);
  const { totalItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const userWishlist = user
    ? wishlist.filter((item) => item.userEmail === user.email)
    : wishlist;

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-white" to="/">
          <img src={logo} alt="Logo" height="50" />
        </Link>

        {/* Custom Toggle */}
        <button
          className={`custom-toggler ${isOpen ? "open" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Collapsible Menu */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav mx-auto align-items-center gap-4 mt-3 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handleClose}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu" onClick={handleClose}>
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={handleClose}>
                About
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="shopDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                Shop
              </span>
              <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/cart"
                    onClick={handleClose}
                  >
                    Cart ({totalItems})
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/checkout"
                    onClick={handleClose}
                  >
                    Checkout
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/orders"
                    onClick={handleClose}
                  >
                    Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/wishlist"
                    onClick={handleClose}
                  >
                    Wishlist
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={handleClose}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            {!user ? (
              <NavLink
                className="nav-link btn btn-outline-light px-3 py-2"
                to="/login"
              >
                Login
              </NavLink>
            ) : (
              <>
                <span className="text-white">Hi, {user.name}</span>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            )}

            <NavLink className="position-relative" to="/wishlist">
              {userWishlist.length > 0 ? (
                <BsHeartFill size={25} color="red" />
              ) : (
                <CiHeart size={28} color="white" />
              )}
              {userWishlist.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {userWishlist.length}
                </span>
              )}
            </NavLink>

            <NavLink className="position-relative" to="/cart">
              <BsCart3 size={25} color="white" />
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
