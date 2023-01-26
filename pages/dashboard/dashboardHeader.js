import React from "react";

const DashboardHeader = ({ user }) => {
  return (
    <div className="mx-4">
      <div className="bg-[#E2B9D4] rounded-lg py-6 max-w-[1440px] mx-auto px-4">
        <img
          className="rounded-full w-48 mx-auto"
          src={user?.photoURL}
          alt=""
        />
        <h3 className="text-black text-4xl text-center">
          Welcome
          <span className="text-cyan-500"> {user?.displayName}</span>
        </h3>
        <h1 className="text-black text-4xl text-center mt-3">{user?.email}</h1>
      </div>
    </div>
  );
};

export default DashboardHeader;
