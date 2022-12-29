import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Bookings from "../Components/Bookings/Bookings";
import { AuthContext } from "../context/Authprovider";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bookedInfo?email=${user?.email}`)
      .then((res) => {
        setBooking(res?.data);
        setLoading(false);
      });
  }, [user?.email, loading]);

  if (loading) {
    return <p className="text-black text-5xl text-center">Loading...</p>;
  }
  if (!user) {
    router.push("/login");
  }
  return (
    <>
      booking && (
      <div className="max-w-[1440px] mx-auto px-4 min-h-[69.4vh]">
        <h1 className="text-black text-4xl text-center">
          Welcome <span className="text-cyan-500">{user?.email}</span>
        </h1>

        <div className="overflow-x-auto text-black mt-5">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Email</th>
                <th>Slot</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {booking?.map((info) => (
                <Bookings
                  key={info._id}
                  setLoading={setLoading}
                  loading={loading}
                  info={info}
                ></Bookings>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      ){!booking && <p className="text-black">No booking</p>}
    </>
  );
};

export default Dashboard;
