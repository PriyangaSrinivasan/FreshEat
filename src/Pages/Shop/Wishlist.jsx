import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import { Authcontext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { BsMinecartLoaded } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const Wishlist = () => {
  const { user } = useContext(Authcontext);
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleMoveToCart = async (item) => {
    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    const itemForCart = {
      id: item.id,
      title: item.name || item.title,
      price: item.price,
      img: item.img,
      quantity: 1,
    };

    try {
      // Add to cart
      addToCart(itemForCart);
      await fetch("https://68d4c636e29051d1c0ac0c3a.mockapi.io/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...itemForCart, userEmail: user.email }),
      });

      // Remove from wishlist
      removeFromWishlist(item.id);
    } catch (error) {
      console.error("Error moving item to cart:", error);
    }
  };

  const handleRemove = (item) => {
    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }
    removeFromWishlist(item.id);
  };

  const userWishlist = wishlist.filter((i) => i.userEmail === user?.email);

  if (!user) {
    return (
      <div className="text-center py-5">
        <p>Please login to view your wishlist.</p>
        <Link to="/login" className="btn btn-danger">
          Login
        </Link>
      </div>
    );
  }

  if (userWishlist.length === 0) {
    return (
      <div className="wishlist">
        <div className="text-center py-5">
          <h3 className="text-white">Your wishlist is empty!</h3>
          <Link to="/menu" className="btn btn-danger mt-3">
            Go to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist">
      <div className="container py-5">
        <h2 className="mb-4 text-white">My Wishlist</h2>
        <div className="row g-4">
          {userWishlist.map((item) => (
            <div key={item.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card p-3 text-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="img-fluid mb-3"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h5>{item.name}</h5>
                <p className="text-danger fw-bold">{item.price}</p>
                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="btn btn-success"
                    onClick={() => handleMoveToCart(item)}
                  >
                    <BsMinecartLoaded className="me-1" /> Move to Cart
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleRemove(item)}
                  >
                    <AiOutlineDelete /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
