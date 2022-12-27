import Banner from "./Banner";
import TypeWriter from "./TypeWriter";

const Header = () => {
  return (
    <div
      className="h-[100vh] grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 items-center justify-center px-
    "
    >
      <div className="mx-auto">
        <TypeWriter />
      </div>
      <div className="mx-auto">
        <Banner />
      </div>
    </div>
  );
};

export default Header;
