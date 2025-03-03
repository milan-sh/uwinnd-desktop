import React from "react";
import Button from "./Button";
import calendar from "../assets/calendar_clock.png";
import videocam from "../assets/videocam.png";
import doctor from "../assets/doctor.png";
import keyboard_arrow_right from "../assets/keyboard_arrow_right.svg";

const Card = ({ heart, className, status, textColor, otp=false, pending=false }) => {
  return (
    <div className="bg-white p-4 rounded-lg w-full border border-gray-200">
      <div className="flex justify-between items-center">
        <h4 className={`flex items-center justify-between gap-x-2 font-medium`}>
          <span className={`h-2 w-2 rounded-full ${className}`}></span>
          <span className={`${textColor}`}>{status}</span>
        </h4>
        <button className="">
          <img src={heart} alt="favorite" />
        </button>
      </div>
      <div className="flex justify-between items-center my-4 lg:my-0">
        <p className="py-3 font-semibold text-xl">Insomia</p>
        {otp? <Button className="bg-black focus:border-none text-white font-semibold">OTP: 1234</Button> : ""}
      </div>
      <div className="flex lg:flex-row flex-col justify-start lg:items-center gap-x-8">
        <div className="flex items-center justify-start gap-x-2">
          <img src={calendar} alt="" />
          <p className="text-gray-700 font-semibold">
            Mon, 22 Jul | 10:00 to 11:00 AM
          </p>
        </div>
        <div className="flex items-center justify-start gap-x-2 my-4">
          <img src={videocam} alt="" />
          <p className="text-gray-700 font-semibold">Video Consultation</p>
        </div>
      </div>
      <div className="bg-background flex justify-start items-center p-2 gap-x-3 rounded-lg">
        <img className="h-16" src={doctor} alt="" />
        <div className="flex flex-col justify-start items-start gap-y-1 ">
          <h3 className="font-medium text-base">Dr. Ramesh DK</h3>
          <p className="text-gray-700 text-sm">Psychologist - M.Phil, M.Sc</p>
        </div>
      </div>
      {pending? <div className="bg-[#FFFAEB] mt-4 p-4 rounded-xl flex lg:flex-row flex-col justify-between gap-y-3 lg:items-center">
        <div>
          <p className="text-orange-500 mb-3 font-medium">To confirm booking</p>
          <p className="font-medium text-lg text-gray-800">Please add your details such as address, caregiver contact...</p>
        </div>
        <Button className="bg-black focus:border-none text-white lg:py-3">Add Details</Button>
      </div> : ""}
    </div>
  );
};

export default Card;
