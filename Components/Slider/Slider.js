import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../../styles/Slider.module.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Slider = () => {
  const sliderInfo = [
    {
      id: 1,
      img: "https://i.ibb.co/QbGGCYx/people1.png",
      name: "Joseph Buttler",
      designation: "something",
      text: "Monotonectally transition clicks-and-mortar platforms without impactful e-services. Quickly unleash prospective interfaces without reliable markets. Distinctively.",
    },
    {
      id: 2,
      img: "https://i.ibb.co/mJd4qkr/people2.png",
      name: "Andrew Tate",
      designation: "something",
      text: "Monotonectally transition clicks-and-mortar platforms without impactful e-services. Quickly unleash prospective interfaces without reliable markets. Distinctively.",
    },
    {
      id: 3,
      img: "https://i.ibb.co/80s6X8c/people3.png",
      name: "Ben Foaks",
      designation: "something",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 4,
      img: "https://i.ibb.co/QbGGCYx/people1.png",
      name: "Joseph Buttler",
      designation: "something",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 5,
      img: "https://i.ibb.co/80s6X8c/people3.png",
      name: "Joseph Buttler",
      designation: "something",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];

  return (
    <div className="mySwiper max-w-[1440px] mx-auto px-3">
      <Swiper
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {sliderInfo?.map((slider) => (
          <SwiperSlide key={slider.id} className="text-black pl-2">
            <p>{slider.text}</p>
            <div className="flex  mt-6 pb-3 items-center">
              <div className="avatar mr-4">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img alt="" src={slider.img} />
                </div>
              </div>
              <div>
                <p className="text-xl font-bold">{slider.name}</p>
                <p>{slider.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/*         
        <SwiperSlide className="text-black">
          Monotonectally transition clicks-and-mortar platforms without
          impactful e-services. Quickly unleash prospective interfaces without
          reliable markets. Distinctively.
        </SwiperSlide>
        <SwiperSlide className="text-black">
          Monotonectally transition clicks-and-mortar platforms without
          impactful e-services. Quickly unleash prospective interfaces without
          reliable markets. Distinctively.
        </SwiperSlide>
        <SwiperSlide className="text-black">
          Monotonectally transition clicks-and-mortar platforms without
          impactful e-services. Quickly unleash prospective interfaces without
          reliable markets. Distinctively.
        </SwiperSlide>
        <SwiperSlide className="text-black">
          Monotonectally transition clicks-and-mortar platforms without
          impactful e-services. Quickly unleash prospective interfaces without
          reliable markets. Distinctively.
        </SwiperSlide>
        <SwiperSlide className="text-black">
          Monotonectally transition clicks-and-mortar platforms without
          impactful e-services. Quickly unleash prospective interfaces without
          reliable markets. Distinctively.
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
