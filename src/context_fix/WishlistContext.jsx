import { createContext, useState, useEffect, useContext } from "react";
import { Authcontext } from "./AuthContext";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user } = useContext(Authcontext);
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ✅ Toggle wishlist (add or remove)
  const toggleWishlist = (item) => {
    if (!user) {
      alert("Please login to use wishlist!");
      return;
    }

    const exists = wishlist.some(
      (w) => w.id === item.id && w.userEmail === user.email
    );

    if (exists) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  // ✅ Add item
  const addToWishlist = (item) => {
    if (!user) return;
    const exists = wishlist.some(
      (w) => w.id === item.id && w.userEmail === user.email
    );
    if (!exists) {
      setWishlist([...wishlist, { ...item, userEmail: user.email }]);
    }
  };

  // ✅ Remove item
  const removeFromWishlist = (id) => {
    if (!user) return;
    setWishlist(
      wishlist.filter(
        (w) => !(w.id === id && w.userEmail === user.email)
      )
    );
  };

  // ✅ Clear all
  const clearWishlist = () => {
    if (!user) return;
    setWishlist(wishlist.filter((w) => w.userEmail !== user.email));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
