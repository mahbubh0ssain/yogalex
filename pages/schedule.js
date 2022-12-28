import { useState } from "react";

const Schedule = ({ data }) => {
  const [slot, setSlot] = useState("");

  return (
    <div>
      <h1 className="text-black text-6xl text-center">
        This is schedule component
      </h1>

      {data?.map((info) => (
        <div
          onClick={() => setSlot(info?.time)}
          key={info?._id}
          className="btn btn-primary text-3xl font-thin"
        >
          {info?.time}
        </div>
      ))}

      <input
        defaultValue={slot}
        readOnly
        type="text"
        name="slot"
        placeholder="Selected slot"
        className="input input-bordered text-black"
      />
    </div>
  );
};

export default Schedule;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/bookings");
  const bookings = await res.json();
  return {
    props: {
      data: bookings.data,
    },
  };
};
