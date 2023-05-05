import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { subHours } from "date-fns";

export default function HomeStats() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("/api/orders").then((res) => {
      setOrders(res.data);
      setIsLoading(false);
    });
  }, []);

  function ordersTotal(orders) {
    let sum = 0;
    orders.forEach((order) => {
      const { line_items } = order;
      line_items.forEach((line) => {
        const lineSum = (line.quantity * line.price_data.unit_amount) / 100;
        sum += lineSum;
      });
    });
    return new Intl.NumberFormat("en-SG").format(sum);
  }

  if (isLoading) {
    return (
      <div className="my-4">
        <Spinner fullWidth={true} />
      </div>
    );
  }
  const ordersToday = orders.filter(
    (order) => new Date(order.createdAt) > subHours(new Date(), 24)
  );
  const ordersWeek = orders.filter(
    (order) => new Date(order.createdAt) > subHours(new Date(), 24 * 7)
  );
  const ordersMonth = orders.filter(
    (order) => new Date(order.createdAt) > subHours(new Date(), 24 * 30)
  );

  return (
    <div>
      <h2 className="mt-4 mb-4">Orders</h2>
      <div className="tiles-grid">
        <div className="tile">
          <h3 className="tile-header">Today</h3>
          <div className="tile-number">{ordersToday.length}</div>
          <div className="tile-desc">{ordersToday.length} orders today</div>
        </div>
        <div className="tile">
          <h3 className="tile-header">This week</h3>
          <div className="tile-number">{ordersWeek.length}</div>
          <div className="tile-desc">{ordersWeek.length} orders this week</div>
        </div>
        <div className="tile">
          <h3 className="tile-header">This month</h3>
          <div className="tile-number">{ordersMonth.length}</div>
          <div className="tile-desc">
            {ordersMonth.length} orders this month
          </div>
        </div>
      </div>
      <h2 className="mt-4 mb-4">Revenue</h2>
      <div className="tiles-grid">
        <div className="tile">
          <h3 className="tile-header">Today</h3>
          <div className="tile-number">$ {ordersTotal(ordersToday)}</div>
          <div className="tile-desc">{ordersToday.length} orders today</div>
        </div>
        <div className="tile">
          <h3 className="tile-header">This week</h3>
          <div className="tile-number">$ {ordersTotal(ordersWeek)}</div>
          <div className="tile-desc">{ordersWeek.length} orders this week</div>
        </div>
        <div className="tile">
          <h3 className="tile-header">This month</h3>
          <div className="tile-number">$ {ordersTotal(ordersMonth)}</div>
          <div className="tile-desc">
            {ordersMonth.length} orders this month
          </div>
        </div>
      </div>
    </div>
  );
}
