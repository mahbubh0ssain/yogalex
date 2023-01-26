import Trainer from "../../Components/Trainer/Trainer";

const About = ({ trainers }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <h1 className="text-5xl text-center my-6">Meet our instructors.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers?.map((trainer) => (
          <Trainer key={trainer?._id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default About;

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:5000/trainer`);
  const trainers = await res.json();
  return {
    props: {
      trainers,
    },
  };
};