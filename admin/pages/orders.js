import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/orders");
      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  // const updateOrderStatus = async (orderId, newStatus) => {
  //   try {
  //     await axios.put("/api/orders", { orderId, newStatus });
  //     const updatedOrders = orders.map((order) =>
  //       order._id === orderId ? { ...order, status: newStatus } : order
  //     );
  //     setOrders(updatedOrders);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleStatusChange = async (event, orderId) => {
    const newStatus = event.target.value;
    try {
      await axios.put("/api/orders", { orderId, newStatus });
      const updatedOrders = orders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>Date</th>
            <th>Paid</th>
            <th>Recipient</th>
            <th>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={5}>
                <div className="py-4">
                  <Spinner fullWidth={true} />
                </div>
              </td>
            </tr>
          )}

          {orders.length > 0 &&
            orders.map((order) => (
              <tr>
                <td>{new Date(order.createdAt).toLocaleString("en-SG")}</td>
                <td className={order.paid ? "text-teal-500" : "text-red-600"}>
                  {order.paid ? "YES" : "NO"}
                </td>
                <td>
                  {order.name}&nbsp;
                  {order.email}
                  <br />
                  {order.streetAddress},{order.city}({order.postalCode})
                  <br />
                  {order.country}
                </td>
                <td>
                  {order.line_items.map((line) => (
                    <>
                      {line.price_data?.product_data.name} x {line.quantity}
                      <br />
                    </>
                  ))}
                </td>
                <td>
                  <form>
                    <select
                      value={order.status}
                      onChange={(ev) => handleStatusChange(ev, order._id)}
                      className="mb-0 w-64"
                    >
                      <option value="Preparation">Preparing to ship</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </form>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
}
