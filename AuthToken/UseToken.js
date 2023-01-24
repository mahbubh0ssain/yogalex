import axios from "axios";
export const useToken = (email) => {
  axios.post(`https://yogalex-server.vercel.app/jwt/${email}`).then((res) => {
    localStorage.setItem("token", res.data);
  });
};
