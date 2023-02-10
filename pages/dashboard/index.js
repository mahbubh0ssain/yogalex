import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { getRole, getUsers } from "../../Components/getInfo/getInfo";
import { Loader } from "../../Components/Spinner/Spinner";
import { AuthContext } from "../context/Authprovider";
import AdminManager from "./adminManager";
import Users from "./adminUser";
import UserBooking from "./bookings";
import DashboardHeader from "./dashboardHeader";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);

  const admin = getRole(user?.email);
  const [users, loader, setLoader] = getUsers(user?.email);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookedInfo?email=${user?.email}`
      )
      .then((res) => {
        setBooking(res?.data);
        setLoading(false);
      });
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  if (!window.localStorage.getItem("token")) {
    router.push("/login");
  }

  return (
    <div className="min-h-[69vh]">
      {/* dashboard header */}
      <DashboardHeader user={user} />

      {/* all users for admin only */}
      <div className="max-w-[1440px] mx-auto">{admin && <AdminManager />}</div>

      {/* users for admin */}
      {admin && users?.length ? (
        <Users users={users} setLoader={setLoader} loader={loader} />
      ) : (
        !users?.data?.length(
          <h2 className="text-5xl flex items-center justify-center">
            There are no users
          </h2>
        )
      )}
      {/* bookings for user */}
      {!admin && booking?.length ? (
        <UserBooking
          booking={booking}
          loading={loading}
          setLoading={setLoading}
        />
      ) : (
        !admin && (
          <h2 className="text-5xl my-3 flex items-center justify-center">
            You have no order
          </h2>
        )
      )}
    </div>
  );
};

export default Dashboard;
