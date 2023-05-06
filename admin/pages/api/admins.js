import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "./auth/[...nextauth]";
import { Admin } from "@/models/Admin";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
    res.json(await Admin.find());
  }

  if (method === "POST") {
    const { email } = req.body;
    if (await Admin.findOne({ email })) {
      res.status(400).json({ message: "admin already exists!" });
    } else {
      res.json(await Admin.create({ email }));
    }
  }

  if (method === "PUT") {
    const { email, adminType, _id } = req.body;
    await Admin.updateOne({ _id }, { email, adminType });
    res.json(true);
  }

  if (method === "DELETE") {
    const { _id } = req.query;
    await Admin.findByIdAndDelete(_id);
    res.json(true);
  }
}
