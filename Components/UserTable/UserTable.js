import axios from "axios";
import React, { useContext } from "react";

const UserTable = ({ info, setLoader, loader }) => {
  const { email, _id } = info;
  const handleDelete = (_id) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/deleteUser?id=${_id}`)
      .then(() => {
        setLoader(!loader);
      });
  };
  return (
    <tr className="max-w-[1440px] mx-auto ">
      <td>{email}</td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-xs bg-red-500 border-0"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserTable;
