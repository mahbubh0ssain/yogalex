import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Bookings from "../Components/Bookings/Bookings";
import { getRole } from "../Components/getRole";
import { AuthContext } from "../pages/context/Authprovider";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const admin = getRole(user?.email);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/bookedInfo?email=${user?.email}`
      )
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
    <div className="min-h-[69vh]">
      <div className="mx-4">
        <div className="bg-primary rounded-lg py-6 max-w-[1440px] mx-auto px-4">
          <img
            className="rounded-full w-48 mx-auto"
            src="https://i.ibb.co/G5gcTmk/IMG-20220729-233013-256x256.jpg"
            alt=""
          />
          <h3 className="text-black text-4xl text-center">
            Welcome
            <span className="text-cyan-500"> Md. Mahbub Hossain</span>
          </h3>
          <h1 className="text-black text-4xl text-center mt-3">
            {user?.email}
          </h1>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto ">
        {admin && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 px-4">
            <Link href="/addTrainer" className="text-4xl">
              <div className="bg-primary p-3 flex gap-7 rounded-lg">
                Add Trainer
                <img
                  className="w-12"
                  src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3197020/plus-circle-icon-md.png"
                  alt=""
                />
              </div>
            </Link>
            <Link href="/addBlog" className="text-4xl">
              <div className="bg-primary p-3 flex gap-7 rounded-lg">
                Add Blog
                <img
                  className="w-12"
                  src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3197020/plus-circle-icon-md.png"
                  alt=""
                />
              </div>
            </Link>
          </div>
        )}
      </div>

      {booking?.length ? (
        <div className="max-w-[1440px] mx-auto px-4 min-h-[69.4vh]">
          <div className="overflow-x-auto text-black mt-5">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Time of Booking</th>
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
      ) : (
        <h2 className="text-5xl flex items-center justify-center">
          You have no order
        </h2>
      )}
    </div>
  );
};

export default Dashboard;
