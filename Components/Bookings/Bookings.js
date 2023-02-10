import axios from "axios";

const Bookings = ({ info, setLoading, loading }) => {
  const { bookingTime, date, slot, _id } = info;
  const handleDelete = () => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/deleteBooking?id=${_id}`)
      .then(() => {
        setLoading(!loading);
      });
  };
  return (
    <tr className="max-w-[1440px] mx-auto">
      <td>{bookingTime}</td>
      <td>{slot}</td>
      <td>{date}</td>
      <td>
        <button
          onClick={handleDelete}
          className="btn btn-xs bg-red-500 border-0"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Bookings;
