import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Menu from "./Pages/Menu.jsx";
import Cart from "./Pages/Shop/Cart.jsx";
import Checkout from "./Pages/Shop/Checkout.jsx";
import Orders from "./Pages/Shop/Orders.jsx";
import Wishlist from "./Pages/Shop/Wishlist.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

import { AuthContext } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
