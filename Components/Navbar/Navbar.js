import Link from "next/link";

const Navbar = () => {
  const logOut = () => {
    logOutUser()
      .then(() => {
        toast.success("Logout successful.");
      })
      .catch(() => {});
  };

  const menuItems = (
    <>
      <li className="hover:border-b-2 text-black hover:text-white">
        <a to="/">Home</a>
      </li>
      <li className="hover:border-b-2 text-black hover:text-white">
        <a to="/blogs">Classes</a>
      </li>
      <li className="hover:border-b-2 text-black hover:text-white">
        <a to="/dashboard">Schedule</a>
      </li>
      <li className="hover:border-b-2 text-black hover:text-white">
        <a to="/dashboard">About</a>
      </li>
      <li className="hover:border-b-2 text-black hover:text-white">
        <a to="/dashboard">Blog</a>
      </li>
      <li className="hover:border-b-2 text-black hover:text-white">
        <a to="/dashboard">Contact</a>
      </li>
      {/* {user?.email ? (
        <li>
          <button onClick={logOut}>
            <img
              className="img-fluid"
              style={{ width: "28px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_logOut-ltr.svg/2048px-OOjs_UI_icon_logOut-ltr.svg.png"
              alt=""
            />
          </button>
        </li>
      ) : (
        <li className="hover:border-b-2 text-black hover:text-white"></li>
      )} */}
    </>
  );

  return (
    <div className="mb-6 shadow-sm">
      <div className="navbar max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="cursor-pointer lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link href="/" className=" text-xl text-white cursor-pointer">
            <div className="flex items-center">
              <img
                className="w-12"
                src="https://images.squarespace-cdn.com/content/v1/5f0454d8d490b92e8b65b6be/1599492359265-CTN3SK1LIPQI1KIO8FM4/YOGALEX_LOGO_VECTOR_RGB.png"
                alt=""
              />
            </div>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
