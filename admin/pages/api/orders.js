import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handler(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await Order.find().sort({ createdAt: -1 }));
  }

  if (method === "PUT") {
    const { orderId, newStatus } = req.body;
    const orderDoc = await Order.findByIdAndUpdate(
      orderId,
      { status: newStatus },
      { new: true }
    );
    res.json(orderDoc);
  }
}
