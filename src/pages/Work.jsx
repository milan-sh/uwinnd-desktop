import React, { useState } from "react";
import { Button, Sidebar, Card, Nav } from "../components/index";
import favorite from "../assets/favorite.svg";
import favorite_red from "../assets/favorite_red.svg";
import arrow_forward from "../assets/arrow_forward.svg";

const work = () => {
  const [acitveTab, setActiveTab] = useState("Tab1");

  return (
    <div className="font-sans bg-background">
      <Nav />
      <div className="flex lg:flex-row flex-col justify-between items-start w-full gap-x-5 p-4">
        <Sidebar />
        <div className="lg:w-3/4 lg:m-4 rounded-lg bg-white p-4">
          <button className="p-4 cursor-pointer flex items-center gap-x-3.5">
            <img className="w-4" src={arrow_forward} alt="" />{" "}
            <span className="font-semibold text-xl">Back</span>
          </button>
          <div className="p-4 lg:text-3xl text-lg font-medium flex lg:flex-row flex-col justify-between items-center gap-y-3">
            <h2 className="lg:self-start self-start">My Bookings</h2>
            <label className="self-start lg:self-auto flex items-center justify-start gap-x-2 bg-white border-2 border-gray-100 lg:py-3 py-1 px-3 lg:px-6 rounded-lg">
              <svg
                className="h-[0.8em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow text-lg outline-none"
                placeholder="Search"
              />
            </label>
          </div>
          <div className="w-full p-4">
            <div className="tabs flex justify-start items-center py-2 px-4">
              <button
                onClick={() => setActiveTab("Tab1")}
                className={`text-xl lg:w-36 w-28 ${
                  acitveTab === "Tab1"
                    ? "text-custom-gradient border-b-4 border-primary "
                    : "text-gray-500"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setActiveTab("Tab2")}
                className={`text-xl lg:w-36 w-28 ${
                  acitveTab === "Tab2"
                    ? "text-custom-gradient border-b-4 border-primary "
                    : "text-gray-500"
                }`}
              >
                Past
              </button>
            </div>
          </div>
          
          {/* Appointments */}
          <div className="px-4 py-2">
            <h2 className="text-gray-500 text-lg font-medium pb-4">Today</h2>
            {/* cards-container */}
            <div className="flex flex-col justify-start items-start gap-y-4">
              <Card
                heart={favorite}
                textColor="text-green-500"
                className="bg-green-500"
                status="Booking Confirmed"
                otp="true"
              />
              <Card
                heart={favorite_red}
                textColor="text-orange-400"
                className="bg-orange-400"
                status="Pending"
                pending="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
