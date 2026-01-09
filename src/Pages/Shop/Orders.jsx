import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    // Safely get user-specific orders from localStorage
    const savedOrders =
      JSON.parse(localStorage.getItem(`orders_${user.email}`)) || [];
    setOrders(savedOrders);
  }, [user, navigate]);

  return (
    <div className="order">
    <div className="container py-5">
      <h2 className="text-white">My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="border p-3 mb-3 text-white">
            <h5>Order ID: {order.id}</h5>
            <p>Date: {order.date}</p>
            {order.billing && (
              <>
                <h6>Billing Address:</h6>
                <p>
                  {order.billing.address}, {order.billing.city},{" "}
                  {order.billing.state} - {order.billing.zip}
                </p>
              </>
            )}
            <h6>Items:</h6>
            <ul>
              {order.items?.map((item) => (
                <li key={item.id}>
                  {item.title} - {item.quantity} x {item.price}
                </li>
              ))}
            </ul>
            <h5>Total: ${order.total}</h5>
          </div>
        ))
      )}
    </div>
    </div>
  );
};

export default Orders;
