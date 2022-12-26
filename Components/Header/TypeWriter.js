import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <>
      <div className=" text-6xl text-black font-thin">
        <Typewriter
          options={{
            strings: ["Joyful Living", "Effective Therapy", "Flexibility"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>

      <h2 class="my-5 text-3xl font-thin text-black">
        Do Yoga today for a better tomorrow.
      </h2>
    </>
  );
};

export default TypeWriter;
