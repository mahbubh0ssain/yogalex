import { useContext } from "react";
import Classes from "../Components/Classes/Classes";
import Header from "../Components/Header/Header";
import Lifestyle from "../Components/Lifestyle/Lifestyle";
import Membership from "../Components/Membership/Membership";
import Slider from "../Components/Slider/Slider";
import WhyShould from "../Components/WhyShould/WhyShould";

const Home = () => {
  const vdk = process.env.NEXT_PUBLIC_URL;
  console.log("eibar paissi", vdk);
  return (
    <div>
      <Header />
      <WhyShould />
      <Lifestyle />
      <Classes />
      <Membership />
      <Slider />
    </div>
  );
};
export default Home;
