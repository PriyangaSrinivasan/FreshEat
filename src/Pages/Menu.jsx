import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsHeartFill } from "react-icons/bs";
import { WishlistContext } from "../context/WishlistContext";
import { BsMinecartLoaded } from "react-icons/bs";
import { Authcontext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const titleicon = "/assets/titleicon.svg";

const Menu = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { user } = useContext(Authcontext);
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const navigate = useNavigate();

  // Fetch food items
  useEffect(() => {
    setLoading(true);
    fetch("https://68f85aefdeff18f212b5dd8a.mockapi.io/fooditems")
      .then((res) => res.json())
      .then((data) => {
        setDishes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching menu:", err);
        setLoading(false);
      });
  }, []);

  // Add to cart
  // Add to cart
  const handleAddToCart = async (dish) => {
    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    const dishForCart = {
      id: dish.id,
      title: dish.name || dish.title, // <-- always use title
      price: dish.price,
      img: dish.img,
      quantity: 1,
    };

    addToCart(dishForCart);

    await fetch("https://68d4c636e29051d1c0ac0c3a.mockapi.io/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...dishForCart, userEmail: user.email }),
    });

    navigate("/cart");
  };

  // Pagination logic
  const totalPages = Math.ceil(dishes.length / itemsPerPage);
  const indexOfLastDish = currentPage * itemsPerPage;
  const indexOfFirstDish = indexOfLastDish - itemsPerPage;
  const currentDishes = dishes.slice(indexOfFirstDish, indexOfLastDish);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Banner */}
      <div className="about text-white d-flex align-items-center justify-content-center flex-column">
        <h1 style={{ fontSize: "80px", fontWeight: "700" }}>Menu</h1>
        <span>
          <Link to="/" className="h5">
            Home
          </Link>{" "}
          /
          <Link to="/menu" className="text-danger h5">
            Menu
          </Link>
        </span>
      </div>

      {/* Menu Section */}
      <section
        className="dish-menu d-flex flex-column p-5"
        style={{ background: "none" }}
      >
        <div className="text-center py-5">
          <p className="h5">
            <span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcotmpaz0WrFoWasdLIz4Q6skFlPgs8GyaEA&s"
                width={50}
                className="pe-3 text-warning"
                alt=""
              />
            </span>
            POPULAR DISHES
            <span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcotmpaz0WrFoWasdLIz4Q6skFlPgs8GyaEA&s"
                width={50}
                className="ps-3 text-warning"
                alt=""
              />
            </span>
          </p>
          <p className="h2">Best Selling Dishes</p>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {/* Dishes */}
            <div className="d-flex flex-wrap gap-5 justify-content-center align-items-center">
              {currentDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="card card-dish text-center d-flex align-items-center justify-content-center position-relative p-5 pt-5"
                  style={{
                    width: "21rem",
                    height: "25rem",
                    zIndex: "1",
                    backgroundColor: "#fff",
                    borderRadius: "15px",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div>
                    <img
                      className="pb-3"
                      src={dish.img}
                      alt={dish.name}
                      style={{ width: "200px" }}
                    />
                    <p
                      className="h3"
                      style={{ fontWeight: "700", lineHeight: "50px" }}
                    >
                      {dish.name}
                    </p>
                    <p
                      className="text-danger"
                      style={{ fontSize: "20px", fontWeight: "700" }}
                    >
                      {dish.price}
                    </p>
                  </div>

                  {/* Heart Icon */}
                  <div
                    className="position-absolute d-flex align-items-center justify-content-center"
                    style={{
                      zIndex: "999",
                      top: "15px",
                      right: "25px",
                      fontSize: "28px",
                    }}
                  >
                    <span
                      onClick={() => toggleWishlist(dish)}
                      className={`${
                        wishlist.find((i) => i.id === dish.id)
                          ? "bg-danger text-white"
                          : "bg-light text-dark"
                      } rounded-circle d-flex align-items-center justify-content-center`}
                      style={{ width: 45, height: 45, cursor: "pointer" }}
                    >
                      {wishlist.find((i) => i.id === dish.id) ? (
                        <BsHeartFill />
                      ) : (
                        <CiHeart />
                      )}
                    </span>
                  </div>

                  {/* Cart Icon */}
                  <span
                    className="cart-img mt-3"
                    onClick={() => handleAddToCart(dish)}
                    style={{ cursor: "pointer", fontSize: "28px" }}
                  >
                    <BsMinecartLoaded />
                  </span>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-5 gap-2 flex-wrap">
              <button
                className="border-0 bg-transparent"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ◀
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`pagination-btn ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className="border-0 bg-transparent"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                ▶
              </button>
            </div>
          </>
        )}
      </section>

      {/* Pagination Styles */}
      <style>{`
        .pagination-btn {
          border: none;
          background: #fff;
          color: #dc3545;
          border: 2px solid #dc3545;
          padding: 10px 18px;
          border-radius: 50%;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .pagination-btn:hover {
          background: #dc3545;
          color: #fff;
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(220, 53, 69, 0.6);
        }

        .pagination-btn.active {
          background: #dc3545;
          color: #fff;
          box-shadow: 0 0 15px rgba(220, 53, 69, 0.7);
        }

        .pagination-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .card-dish:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default Menu;
