import axios from "axios";

const Bookings = ({ info, setLoading, loading }) => {
  const { date, slot, email, _id } = info;
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/deletebooking?id=${_id}`)
      .then((res) => {
        console.log(res?.data);
        setLoading(!loading);
      });
  };
  return (
    <tr className="max-w-[1440px] mx-auto px-4">
      <td>{email}</td>
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
