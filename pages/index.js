import { useContext } from "react";
import Classes from "../Components/Classes/Classes";
import Header from "../Components/Header/Header";
import Lifestyle from "../Components/Lifestyle/Lifestyle";
import Membership from "../Components/Membership/Membership";
import Slider from "../Components/Slider/Slider";
import WhyShould from "../Components/WhyShould/WhyShould";
import { AuthContext } from "../context/Authprovider";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  if (!user) {
    return <p className="text-black">Loading...</p>;
  }
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
