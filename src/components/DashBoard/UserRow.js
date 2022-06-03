import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, _id, role } = user;

  const makeAdmin = () => {
    console.log(localStorage.getItem("accessToken"))
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })

      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("successfully make an admin");
        }
      });
  };
  return (
    <tr>
      <th></th>
      <td className="text-info">{email}</td>
      <td>{_id}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-sm btn-primary">
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
