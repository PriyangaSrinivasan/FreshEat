import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  // ✅ Load cart from localStorage when user logs in
  useEffect(() => {
    if (user?.email) {
      const savedCart = localStorage.getItem(`cart_${user.email}`);
      try {
        setCart(savedCart ? JSON.parse(savedCart) : []);
      } catch {
        setCart([]);
      }
    } else {
      setCart([]); // if user logs out, clear cart
    }
  }, [user]);

  // ✅ Save cart automatically when it changes
  useEffect(() => {
    if (user?.email) {
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  // ✅ Add to cart — no duplicates
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);

      if (existing) {
        // increase quantity if already in cart
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      // add new item
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // ✅ Update quantity
  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: newQty } : i))
    );
  };

  // ✅ Remove item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // ✅ Clear entire cart
  const clearCart = () => {
    setCart([]);
    if (user?.email) {
      localStorage.removeItem(`cart_${user.email}`);
    }
  };

  // ✅ Total items and total price (optional for header & checkout)
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
