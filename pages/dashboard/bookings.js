import React from "react";
import Bookings from "../../Components/Bookings/Bookings";

const UserBooking = ({ booking, loading, setLoading }) => {
  return (
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
  );
};

export default UserBooking;
