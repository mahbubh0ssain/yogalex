import CountUp from "react-countup";
const Counting = () => {
  return (
    <div className="bg-[#E2B9D4] py-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto">
        <div className="text-xl m-6 text-center">
          <p>Happy Clients</p>
          <CountUp className="text-3xl font-bold" end={5000} duration={7} />
        </div>
        <div className="text-xl m-6 text-center">
          <p>Yoga Workshops</p>
          <CountUp className="text-3xl font-bold" end={4570} duration={7} />
        </div>
        <div className="text-xl m-6 text-center">
          <p>Years of Experience</p>
          <CountUp className="text-3xl font-bold" end={5} duration={7} />
        </div>
        <div className="text-xl m-6 text-center">
          <p>Lesson Conducted</p>
          <CountUp className="text-3xl font-bold" end={100} duration={7} />
        </div>
      </div>
    </div>
  );
};

export default Counting;
