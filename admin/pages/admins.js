import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import { prettyDate } from "@/lib/date";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { withSwal } from "react-sweetalert2";

function AdminsPage({ swal }) {
  const [editedAdmin, setEditedAdmin] = useState(null);
  const [admin, setAdmin] = useState([]);
  const [email, setEmail] = useState("");
  const [adminType, setAdminType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    setIsLoading(true);
    checkAdminType();
  }, []);

  function checkAdminType() {
    if (session?.user?.adminType === "superadmin") {
      loadAdmins();
    } else {
      swal.fire({
        text: "You are not authorised!",
        icon: "error",
        confirmButtonColor: "#4FD1C5",
      });
      router.push("/");
    }
  }

  function loadAdmins() {
    setIsLoading(true);
    axios.get("/api/admins").then((res) => setAdmin(res.data));
    setIsLoading(false);
  }

  async function saveAdmin(ev) {
    ev.preventDefault();
    const data = {
      email,
      adminType,
    };
    if (editedAdmin) {
      data._id = editedAdmin._id;
      await axios.put("/api/admins/", data);
      setEditedAdmin(null);
    } else {
      await axios
        .post("/api/admins", data)
        .then((res) => {
          console.log(res.data);
          swal.fire({
            icon: "success",
            title: "Admin created!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
            confirmButtonColor: "#4FD1C5",
          });
        });
    }
    setEmail("");
    setAdminType("");
    loadAdmins();
  }

  function editAdmin(admin) {
    setEditedAdmin(admin);
    setEmail(admin.email);
    setAdminType(admin.adminType);
  }

  function deleteAdmin(_id, email) {
    swal
      .fire({
        title: "Are you sure?",
        text: `Do you want to delete admin ${email}?`,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Delete!",
        confirmButtonColor: "#d55",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          axios.delete("/api/admins?_id=" + _id).then(() => {
            swal.fire({
              title: "Admin deleted!",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            loadAdmins();
          });
        }
      });
  }

  return (
    <Layout>
      <h1>Admins</h1>
      <label>
        {editedAdmin ? `Edit Admin ${editedAdmin.email}` : "Add new admin"}
      </label>
      <form onSubmit={saveAdmin}>
        <div className="flex gap-2">
          <input
            type="text"
            className="mb-0"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="google email"
          />

          <select
            value={adminType}
            onChange={(ev) => setAdminType(ev.target.value)}
            className="mb-0 w-64"
          >
            <option value="">Select Admin Type</option>
            <option value="superadmin">Super Admin</option>
            <option value="logistics">Logistics Admin</option>
          </select>
        </div>
        <div className="flex gap-1 mt-2">
          {editedAdmin && (
            <button
              type="button"
              onClick={() => {
                setEditedAdmin(null);
                setEmail("");
                setAdminType("");
              }}
              className="btn-primary"
            >
              Cancel
            </button>
          )}
          <button type="submit" className="btn-primary">
            Save
          </button>
        </div>
      </form>
      {!editedAdmin && (
        <table className="basic mt-4">
          <thead>
            <tr>
              <th className="text-left">Admin google email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={3}>
                  <div className="py-4">
                    <Spinner fullWidth={true} />
                  </div>
                </td>
              </tr>
            )}
            {admin.length > 0 &&
              admin.map((admin) => (
                <tr>
                  <td>{admin.email}</td>
                  <td>{admin.createdAt && prettyDate(admin.createdAt)}</td>
                  <td>{admin.adminType}</td>
                  <td>
                    <button
                      className="btn-primary m-1"
                      onClick={() => {
                        editAdmin(admin);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-red m-1"
                      onClick={() => deleteAdmin(admin._id, admin.email)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
}

export default withSwal(({ swal }) => <AdminsPage swal={swal} />);
