import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <Link className="bg-teal-400 rounded-md py-1 px-2" href="/products/new">
        Add new product
      </Link>
    </Layout>
  );
}
