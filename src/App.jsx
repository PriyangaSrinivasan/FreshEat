import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Shop/Cart.jsx";
import Checkout from "./Pages/Shop/Checkout.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";
import Orders from "./Pages/Shop/Orders.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Wishlist from "./Pages/Shop/Wishlist.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Pages/Contact.jsx";

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
        <Route path="/menu" element={< Menu/>} />
        <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
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
         <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
