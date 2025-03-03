import React from "react";
import U from "../assets/U.svg";
import Line1 from "../assets/Line1.svg";

const Logo = () => {
  return (
    <div className="flex justify-between items-center gap-x-2.5">
      <div className="bg-custom-gradient rounded-lg">
        <div className="w-fit px-3 py-2 flex items-center justify-center flex-col gap-y-0.5">
          <img className="h-6" src={U} alt="" />
          <img className="w-10" src={Line1} alt="" />
        </div>
      </div>
      <div className="leading-5">
        <h2 className="font-bold text-2xl">UnWinnd</h2>
        <p className="text-gray-400 font-semibold">Connecting Emotions</p>
      </div>
    </div>
  );
};

export default Logo;
