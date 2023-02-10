import axios from "axios";
import { useEffect, useState } from "react";

export const getRole = (email) => {
  const [role, setRole] = useState(false);
  axios
    .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/get-role/${email}`)
    .then((res) => {
      if (res?.data?.role === "admin") {
        setRole(true);
      }
    });
  return role;
};

export const getUsers = (email) => {
  const [users, setUsers] = useState({});
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/get-users/${email}`)
      .then((res) => {
        setUsers(res?.data);
        setLoader(false);
      });
  }, [loader]);
  return [users, loader, setLoader];
};

export const getTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/trainer`).then((res) => {
      setTrainers(res?.data);
      setLoader(false);
    });
  }, [loader]);
  return [trainers, setLoader, loader];
};
