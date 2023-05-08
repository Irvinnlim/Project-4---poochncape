import clientPromise from "@/lib/mongodb";
import { mongooseConnect } from "@/lib/mongoose";
import { Admin } from "@/models/Admin";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

async function isAdminEmail(email) {
  mongooseConnect();
  const admin = await Admin.findOne({ email });
  return admin ? admin.adminType : null;
}

export const authOptions = {
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: async ({ session, token, user }) => {
      const adminType = await isAdminEmail(session?.user?.email);
      if (adminType) {
        session.user.adminType = adminType;
        return session;
      } else {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);

export async function isAdminRequest(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const adminType = await isAdminEmail(session?.user?.email);
  if (adminType !== "superadmin") {
    res.writeHead(302, { Location: "/" }); // Redirect to "/" if not authorized
    res.end();
    throw "You are not authorized!";
  }
}
