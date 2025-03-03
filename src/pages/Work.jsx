import React, { useState } from "react";
import { Button, MobileMenu, Card, Nav } from "../components/index";
import favorite from "../assets/favorite.svg";
import favorite_red from "../assets/favorite_red.svg";

const work = () => {
  const [acitveTab, setActiveTab] = useState("Tab2");

  return (
    <div className="font-sans">
      <Nav/>
      <div className="p-4 text-2xl font-medium">
        <h2>Bookings</h2>
      </div>
      <div className="w-full">
        <div className="tabs flex justify-between items-center py-2 px-4">
          <button
            onClick={() => setActiveTab("Tab1")}
            className={`text-xl w-2/4 ${
              acitveTab === "Tab1"
                ? "text-primary border-b-4 border-primary"
                : "text-gray-500"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setActiveTab("Tab2")}
            className={`text-xl w-2/4 ${
              acitveTab === "Tab2"
                ? "text-primary border-b-4 border-primary"
                : "text-gray-500"
            }`}
          >
            Past
          </button>
        </div>
      </div>
      <div className="flex justify-start items-center gap-x-2 p-4 bg-background">
        <Button>All</Button>
        <Button>My self</Button>
        <Button>Dependent</Button>
      </div>
      {/* Appointments */}
      <div className="px-4 py-2 bg-background">
        <h2 className="text-gray-500 text-lg font-medium pb-4">Today</h2>
        {/* cards-container */}
        <div className="flex flex-col justify-start items-start gap-y-4">
          <Card heart={favorite} textColor="text-gray-400" className="bg-gray-400"  status="Completed" />
          <Card heart={favorite_red} textColor="text-gray-400" className="bg-gray-400" status="Completed" />
          <Card heart={favorite} textColor="text-red-700" className="bg-red-700" status="Cancelled"/>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu />
    </div>
  );
};

export default work;
