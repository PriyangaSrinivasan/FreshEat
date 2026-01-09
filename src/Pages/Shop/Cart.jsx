import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeItem, clearCart, updateQuantity } =
    useContext(CartContext);
  const { user } = useContext(Authcontext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  // Wait until user is loaded
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>; // wait for Auth context

  if (!user) {
    navigate("/login");
    return null;
  }

  // Calculate total price
  const total = cart.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="cartpage">
      <div className="container  py-5">
        <h2 className="text-white">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-white">Your cart is empty 🛒</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={item.img}
                      alt={item.title} // ✅ fixed
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        marginRight: "10px",
                      }}
                    />
                    <div>
                      {item.title} - {item.price} {/* ✅ fixed */}
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1} // prevent going below 1
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h4 className="text-white">Total: ${total.toFixed(2)}</h4>
            <button className="btn btn-warning me-2" onClick={clearCart}>
              Clear Cart
            </button>
            <button
              className="btn btn-success"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
