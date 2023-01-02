import axios from "axios";
export const useToken = (email) => {
  axios
    .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/jwt/${email}`)
    .then((res) => {
      localStorage.setItem("token", res.data);
    });
};
