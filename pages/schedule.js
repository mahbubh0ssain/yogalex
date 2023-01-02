import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../pages/context/Authprovider";

const Schedule = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [slot, setSlot] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const number = form.number.value;
    const bookingInfo = { date, slot, email, number };
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/booked`, bookingInfo)
      .then((res) => {
        if (res?.data?.data?.acknowledged) {
          form.reset();
          setSlot("");
          alert("Successfully booked");
        }
      });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!user) {
        router.push("/login");
      }
    }
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <h1 className="text-black text-5xl text-center mb-4">
        Book your session now
      </h1>
      <div className="mb-4">
        <img
          className="rounded-lg h-[70vh] w-full"
          src="https://i.ibb.co/Mp3RJ5v/1280-meditate-yoga.jpg"
          alt=""
        />
      </div>
      <h1 className="text-black text-center text-3xl my-4">Available slots</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {data?.map((info) => (
          <div
            onClick={() => setSlot(info?.time)}
            key={info?._id}
            className="btn btn-primary text-3xl font-thin"
          >
            {info?.time}
            {/* <p className="text-black block">{info?.seats}</p> */}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="max-w-[576px] mx-auto">
        <div className="form-control">
          <label className="label  pb-0">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            required
            placeholder="example@gmail.com"
            className="input input-bordered text-black"
          />
        </div>
        <div className="form-control">
          <label className="label  pb-0">
            <span className="label-text">Slot</span>
          </label>
          <input
            type="text"
            name="slot"
            required
            placeholder="Please select a slot"
            defaultValue={slot}
            readOnly
            className="input input-bordered text-black"
          />
        </div>
        <div className="form-control">
          <label className="label  pb-0">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            required
            readOnly
            defaultValue={user?.email}
            placeholder="example@gmail.com"
            className="input input-bordered text-black"
          />
        </div>
        <div className="form-control">
          <label className="label  pb-0">
            <span className="label-text">Number</span>
          </label>
          <input
            type="text"
            name="number"
            required
            placeholder="01*********"
            className="input input-bordered text-black"
          />
        </div>
        <div className="form-control mt-6">
          <input
            disabled={!slot}
            type="submit"
            className="btn btn-primary"
            value="Book Now"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Schedule;

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/bookings`);
  const bookings = await res.json();
  return {
    props: {
      data: bookings.data,
    },
  };
};
