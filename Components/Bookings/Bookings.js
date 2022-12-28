const Bookings = ({ info }) => {
  const { date, slot, email, _id } = info;

  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <div className="flex gap-2 m-2 rounded p-3 bg-green-500">
        <p className="text-black text-2xl">{email}</p>
        <p className="text-black text-2xl">{slot}</p>
        <p className="text-black text-2xl">{date}</p>
        <button className="text-red-500 btn btn-xs">Delete</button>
      </div>
    </div>
  );
};

export default Bookings;
