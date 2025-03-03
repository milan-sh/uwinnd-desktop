import React from "react";
import Logo from "./Logo";
import location_on from "../assets/location_on.svg"
import icon from "../assets/icon.svg"
import account from "../assets/account.png"
import notification from "../assets/notification.svg"
import keyboard_arrow_down from "../assets/keyboard_arrow_down.svg"

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex justify-between items-center gap-x-8">
        <Logo />
        <div className="flex justify-between items-center w-fit gap-x-1 bg-gray-100 py-3 px-6 rounded-xl">
            <img className="h-8" src={location_on} alt="" />
            <p className="text-custom-gradient text-xl font-medium">Delhi</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-6">
        <img src={icon} alt="" />
        <img className="h-6"  src={notification} alt="" />
        <div className="flex justify-between items-center gap-x-3">
            <img src={account} alt="" />
            <p className="text-lg font-medium">My Account</p>
            <img className="h-3" src={keyboard_arrow_down} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
