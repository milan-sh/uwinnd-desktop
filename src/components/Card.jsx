import React from 'react'
import calendar from "../assets/calendar_clock.png";
import videocam from "../assets/videocam.png";
import doctor from "../assets/doctor.png";
import keyboard_arrow_right from "../assets/keyboard_arrow_right.svg";

const Card = ({heart, className, status, textColor}) => {
  return (
    <div className="bg-white p-4 rounded-lg w-full">
                <div className="flex justify-between items-center">
                  <h4 className={`flex items-center justify-between gap-x-2 font-medium`}>
                    <span className={`h-2 w-2 rounded-full ${className}`}></span><span className={`${textColor}`}>{status}</span>
                  </h4>
                  <button className="">
                    <img src={heart} alt="favorite" />
                  </button>
                </div>
                <p className="py-3 font-semibold text-lg">Insomia</p>
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
                <div className="bg-background flex justify-between items-center p-4 rounded-lg">
                  <img className="h-16" src={doctor} alt="" />
                  <div className="flex flex-col justify-start items-start gap-y-1 ">
                    <h3 className="font-medium text-base">Dr. Ramesh DK</h3>
                    <p className="text-gray-700 text-sm">
                      Psychologist - M.Phil, M.Sc
                    </p>
                  </div>
                  <img
                    className="self-start h-4"
                    src={keyboard_arrow_right}
                    alt=""
                  />
                </div>
                <p className="my-4 text-blue-500 text-center font-medium text-lg">
                  Re-book appointment
                </p>
              </div>
  )
}

export default Card
