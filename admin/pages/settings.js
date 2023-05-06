import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { withSwal } from "react-sweetalert2";

function SettingsPage({ swal }) {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featuredProductId, setFeaturedProductId] = useState("");
  const [shippingFee, setShippingFee] = useState("");

  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    setIsLoading(true);
    checkAdminType();
  }, []);

  function checkAdminType() {
    if (session?.user?.adminType === "superadmin") {
      fetchAll();
    } else {
      swal.fire({
        text: "You are not authorised!",
        icon: "error",
        confirmButtonColor: "#4FD1C5",
      });
      router.push("/");
    }
  }

  async function fetchAll() {
    await axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
    await axios.get("/api/settings?name=featuredProductId").then((res) => {
      setFeaturedProductId(res.data.value);
    });
    await axios.get("/api/settings?name=shippingFee").then((res) => {
      setShippingFee(res.data.value);
    });
    setIsLoading(false);
  }

  async function saveSettings() {
    setIsLoading(true);
    await axios.put("/api/settings", {
      name: "featuredProductId",
      value: featuredProductId,
    });
    await axios.put("/api/settings", {
      name: "shippingFee",
      value: shippingFee,
    });
    setIsLoading(false);
    await swal.fire({
      title: "Settings saved!",
      icon: "sucess",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <Layout>
      <h1>Settings</h1>
      {isLoading && <Spinner fullWidth={true} />}
      {!isLoading && (
        <>
          <label>Featured product</label>
          <select
            value={featuredProductId}
            onChange={(ev) => setFeaturedProductId(ev.target.value)}
          >
            {products.length > 0 &&
              products.map((product) => (
                <option value={product._id}>{product.title}</option>
              ))}
          </select>
          <label>Shipping price (SGD)</label>
          <input
            type="number"
            value={shippingFee}
            onChange={(ev) => setShippingFee(ev.target.value)}
          />
          <div>
            <button onClick={saveSettings} className="btn-primary">
              Save settings
            </button>
          </div>
        </>
      )}
    </Layout>
  );
}

export default withSwal(({ swal }) => <SettingsPage swal={swal} />);
