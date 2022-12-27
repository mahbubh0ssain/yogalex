import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <>
      <div className="text-6xl text-black font-thin mx-4">
        <Typewriter
          options={{
            strings: ["Joyful Living", "Effective Therapy", "Flexibility"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
        <h2 className="my-5 text-3xl font-thin text-black">
          Do Yoga today for a better tomorrow.
        </h2>
      </div>
    </>
  );
};

export default TypeWriter;
