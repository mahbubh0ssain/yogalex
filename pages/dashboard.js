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
  }, [user?.email]);

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

        {booking?.map((info) => (
          <Bookings key={info._id} info={info}></Bookings>
        ))}
      </div>
    )
  );
};

export default Dashboard;
