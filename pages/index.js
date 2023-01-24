import { useContext } from "react";
import Classes from "../Components/Classes/Classes";
import Counting from "../Components/Counting/Counting";
import Header from "../Components/Header/Header";
import Lifestyle from "../Components/Lifestyle/Lifestyle";
import Membership from "../Components/Membership/Membership";
import Slider from "../Components/Slider/Slider";
import WhyShould from "../Components/WhyShould/WhyShould";

const Home = () => {
  return (
    <div>
      <Header />
      <WhyShould />
      <Lifestyle />
      <Classes />
      <Membership />
      <Counting />
      <Slider />
    </div>
  );
};
export default Home;
