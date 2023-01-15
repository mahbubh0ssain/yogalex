import axios from "axios";
import React from "react";

const UserTable = ({ info, setLoader, loader }) => {
  const { email, _id } = info;
  const handleDelete = () => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_BASE_URL}/deleteUser?id=${_id}`)
      .then((res) => {
        setLoader(!loader);
      });
  };
  return (
    <tr className="max-w-[1440px] mx-auto">
      <td>{email}</td>
      <td>
        <button
          onClick={handleDelete}
          className="btn btn-xs bg-red-500 border-0"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserTable;
