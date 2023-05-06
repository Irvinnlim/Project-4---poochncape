const { Schema, model, models } = require("mongoose");

const adminSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    adminType: { type: String, required: true },
  },
  { timestamps: true }
);

export const Admin = models?.Admin || model("Admin", adminSchema);
