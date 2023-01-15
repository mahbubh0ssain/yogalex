import axios from "axios";
import { useState } from "react";

export const getRole = (email) => {
  const [role, setRole] = useState("");
  axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/get-role/${email}`)
    .then((res) => {
      setRole(res?.data?.role);
    });
  return role;
};
