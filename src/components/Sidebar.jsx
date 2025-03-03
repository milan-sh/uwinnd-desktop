import React from "react";
import Button from "./Button";
import keyboard_arrow_up from "../assets/keyboard_arrow_up.svg";

const Sidebar = () => {
  return (
    <aside className="lg:w-96 lg:h-screen lg:sticky top-10 my-4 p-4 rounded-lg bg-white">
      <button className="cursor-pointer flex justify-between items-center w-full">
        <h2 className="font-semibold text-gray-600">Day of the Week</h2>
        <img className="h-2" src={keyboard_arrow_up} alt="" />
      </button>
      <div className="flex justify-start items-center gap-x-2 py-4 w-fit">
        <Button>All</Button>
        <Button>My self</Button>
        <Button>Dependent</Button>
      </div>
      <hr className="text-gray-300 my-4" />
      <button className="cursor-pointer flex justify-between items-center w-full">
        <h2 className="font-semibold text-gray-600">Status</h2>
        <img className="h-2" src={keyboard_arrow_up} alt="" />
      </button>
      <div className="flex justify-start items-center gap-x-2 py-4 w-fit flex-wrap gap-y-3">
        <Button>All</Button>
        <Button>Confirmed</Button>
        <Button>Pending</Button>
        <Button>Completed</Button>
        <Button>Cancelled</Button>
        
      </div>      
    </aside>
  );
};

export default Sidebar;
