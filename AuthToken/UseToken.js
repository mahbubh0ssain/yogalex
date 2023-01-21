import axios from "axios";
export const useToken = (email) => {
  axios.post(`http://localhost:5000/jwt/${email}`).then((res) => {
    localStorage.setItem("token", res.data);
  });
};
