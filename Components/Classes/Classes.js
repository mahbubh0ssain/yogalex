const Classes = () => {
  return (
    <div className="my-12">
      <h1 className="font-thin text-6xl text-center text-black">
        Choose Your Level & Focus
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto my-12 px-4 gap-1">
        <div className="group relative">
          <img
            className="w-full w-100 object-cover"
            src="https://i.ibb.co/C2ThmFK/GT-group-exercise-class-yoga-copy-scaled.jpg"
            alt=""
          />
          <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-pink-300 opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
            <h1 class="text-2xl text-black">Group Lesson</h1>
          </div>
        </div>

        <div className="group relative">
          <img
            className="w-full w-100 object-cover"
            src="https://i.ibb.co/ZNQzPvT/yoga-beginner.jpg"
            alt=""
          />
          <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-pink-300 opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
            <h1 class="text-2xl text-black">Yoga for Beginners</h1>
          </div>
        </div>
        <div className="group relative">
          <img
            className="w-full  w-100  object-cover "
            src="https://i.ibb.co/py3htf0/155-800x533.jpg"
            alt=""
          />
          <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-pink-300 opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
            <h1 class="text-2xl text-black">Couples Yoga</h1>
          </div>
        </div>
        <div className="group relative">
          <img
            className="w-full w-100 object-cover"
            src="https://i.ibb.co/qykBSpj/images-q-tbn-ANd9-Gc-Qg-E4b-Em2y17-UFnf-Mx-IBHB-mjr-MFVt54-XJtb-A-usqp-CAU.jpg"
            alt=""
          />
          <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-pink-300 opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
            <h1 class="text-2xl text-black">Bikram Yoga</h1>
          </div>
        </div>
        <div className="group relative">
          <img
            className="w-full  w-100 object-cover "
            src="https://i.ibb.co/MpVTfVK/DSC04150.jpg"
            alt=""
          />
          <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-pink-300 opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
            <h1 class="text-2xl text-black">Yoga Barre</h1>
          </div>
        </div>
        <div className="group relative">
          <img
            className="w-full w-100 object-cover"
            src="https://i.ibb.co/7GKGjwd/2018-04-09-43737-1523276471-large.jpg"
            alt=""
          />
          <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-pink-300 opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
            <h1 class="text-2xl text-black">Outside Yoga</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
