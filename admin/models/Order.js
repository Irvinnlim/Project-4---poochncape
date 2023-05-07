import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    line_items: Object,
    name: String,
    city: String,
    email: String,
    postalCode: String,
    streetAddress: String,
    country: String,
    paid: Boolean,
    status: {
      type: String,
      enum: ["Preparation", "Shipped", "Delivered"],
      default: "Preparation",
    },
  },
  { timestamps: true }
);

export const Order = models?.Order || model("Order", OrderSchema);
