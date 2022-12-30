import axios from "axios";
export const useToken = (email) => {
  axios.post(`http://localhost:5000/jwt/${email}`).then((res) => {
    console.log(res);
    localStorage.setItem("token", res.data);
  });
};
