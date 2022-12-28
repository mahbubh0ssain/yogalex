import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Bookings from "../Components/Bookings/Bookings";
import { AuthContext } from "../context/Authprovider";

const Dashboard = () => {
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
  return (
    booking && (
      <div className="max-w-[1440px] mx-auto px-4">
        <h1 className="text-black text-4xl text-center">
          Welcome <span className="text-cyan-500">{user?.email}</span>
        </h1>
        <h4 className="text-black text-center text-xl my-6">
          Your Bookings {booking.length}
        </h4>

        <div className="overflow-x-auto text-black">
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
    )
  );
};

export default Dashboard;
