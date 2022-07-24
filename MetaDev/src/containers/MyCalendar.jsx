import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "./SideBar";
import DropDownTime from "../components/DropDownTime";
import Button from "../components/Button";

function MyCalendar() {
  const [available, setAvailable] = useState([
    {
      Day: "SUNDAYS",
      slots: 1,
      open: false,

      checkAvailblety: true,
      AvailabilitySlots: 2,
      AvailabilityData: [
        { startTiming: "09:00 AM", endTiming: "10:00 AM" },
        { startTiming: "11:00 AM", endTiming: "12:00 AM" },
      ],
    },
    {
      Day: "MONDAYS",
      slots: 1,
      open: false,

      checkAvailblety: false,
      AvailabilitySlots: 0,
      AvailabilityData: [],
    },
    {
      Day: "TUESDAYS",
      slots: 1,
      open: false,

      checkAvailblety: true,
      AvailabilitySlots: 1,
      AvailabilityData: [{ startTiming: "01:00 PM", endTiming: "04:00 PM" }],
    },
    {
      Day: "WEDNESDAYS",
      slots: 1,
      open: false,

      checkAvailblety: false,
      AvailabilitySlots: 0,
      AvailabilityData: [],
    },
    {
      Day: "THURSDAYS",
      slots: 1,
      open: false,

      checkAvailblety: false,
      AvailabilitySlots: 0,
      AvailabilityData: [],
    },
    {
      Day: "FRIDAYS",
      slots: 1,
      open: false,

      checkAvailblety: false,
      AvailabilitySlots: 0,
      AvailabilityData: [],
    },
    {
      Day: "SATURDAYS",
      slots: 1,
      open: false,
      modal: false,
      checkAvailblety: false,
      AvailabilitySlots: 0,
      AvailabilityData: [],
    },
  ]);

  function timeSave() {
    // setSave(...save.push({ startTiming: startinput, endTiming: endinput }));
    return;
  }

  const handleOpenClick = (index) => {
    const a = [...available];
    a[index].open = !a[index].open;
    setAvailable(a);
  };

  const activeLink = "text-sky-400 border-b-4 border-sky-500";
  const normalLink = "text-slate-700";
  useEffect(() => {}, [available]);
  var date = new Date();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function Availability() {
    return (
      <>
        <section className="flex flex-col border rounded-3xl m-4 w-[350px] ml-8 p-4 bg-white">
          <div className="pb-4 mb-4 border-b">
            <div className="font-bold text-xl tracking-tighter text-gray-900 pt-2 px-2 font-inter">
              My Availability
            </div>
            <p className="text-base font-semibold text-gray-700 px-2 font-inter">
              In your local timezone (Asia)
            </p>
          </div>

          <div className="w-full grid grid-cols-4 gap-1 items-start justify-start h-fit ">
            {available.map((a, index) => {
              return (
                <>
                  {index < 4 ? (
                    <div
                      key={index}
                      className={`w-full overflow-ellipsis h-[75px] p-1 flex flex-col items-center justify-center border rounded-lg  ${
                        index === 0 ? "border-[#0a243f]" : "border-[#e6e9ec]"
                      } `}
                    >
                      <div className="text-[8px] font-semibold font-inter text-[#6b7b8a] mb-1">
                        {weekday[date.getDay() + index]}
                      </div>
                      <div className="text-sm font-bold font-inter text-[#0a243f] mb-1">
                        {date.getDate() + index} {months[date.getMonth()]}
                      </div>

                      {a.checkAvailblety ? (
                        <div className="text-[9px] text-green-500 font-semibold text-center font-inter w-full">
                          {a.AvailabilitySlots} Slots left
                        </div>
                      ) : (
                        <div className="text-[#ff5a5a] text-[9px] font-semibold text-center font-inter">
                          Unavaliable
                        </div>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
          <div className="text-base font-semibold text-[#0a243f] py-4 border-b">
            Available time slots
          </div>
          {available.map((a, index) => {
            return (
              <>
                {a.AvailabilityData.length === 0 ? (
                  ""
                ) : (
                  <div className="flex items-center mt-4 border-b pb-4">
                    <section className="w-[20%] flex justify-center items-center flex-col">
                      <div className=" text-4xl text-gray-900 border-b-4 border-green-600  font-black ">
                        {date.getDate() + index}
                      </div>
                      <div className="text-sm text-gray-700 font-semibold">
                        {weekday[date.getDay() + index]}
                      </div>
                    </section>
                    <div className=" rounded-lg bg-white p-4 w-full space-y-2">
                      {a.AvailabilityData.map((f, index) => {
                        return (
                          <div
                            className="text-sm text-gray-900 font-semibold mb-2"
                            key={index}
                          >
                            {f.startTiming} to {f.endTiming}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <SideBar />
      <div className="flex items-center justify-start overflow-x-hidden w-full ">
        <div className="mt-28 min-h-[100vh] h-[100%]   ml-[16.5rem]  pt-10 bg-[#f8f8f8]">
          <div className="-mt-16 ml-8 ">
            <div className="flex pb-1 items-center justify-start space-x-7">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to={"/calendar"}
              >
                <p className="font-inter text-sm  cursor-pointer hover:text-sky-500">
                  Weakly Hours
                </p>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to={"/goals"}
              >
                <p className="font-inter text-sm  cursor-pointer hover:text-sky-500">
                  Spasific Days
                </p>
              </NavLink>
            </div>
            <div className=" bg-slate-300 h-[1px] w-[100vw] -ml-8 -mt-1 " />
          </div>
          <section className="flex flex-row">
            <div className="pl-[2rem] w-[600px] flex items-center justify-start mt-5 h-[100%] overflow-y-auto ">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex items-start justify-start w-full mb-6">
                  <div className="text-[16px] tracking-tighter text-slate-900 font-semibold font-inter">
                    Default
                  </div>
                  <div className="ml-auto">
                    <Button textOfButton="Save" onClick={() => timeSave()} />
                  </div>
                </div>
                {available.map((f, index) => {
                  return (
                    <div
                      className="flex items-start justify-start mt-2 pb-4 border-b w-full"
                      key={index}
                    >
                      <label className="flex items-center w-[150px] cursor-pointer my-8">
                        <div className="relative">
                          <input
                            type="checkbox"
                            className="sr-only"
                            onClick={() => handleOpenClick(index)}
                          />
                          <div className="w-10 h-4 bg-gray-200 rounded-full shadow-inner"></div>
                          <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                        </div>
                        <div className="flex-start ml-3 text-gray-900 font-medium capitalize font-inter tracking-wide leading-4">
                          {f.Day}
                        </div>
                      </label>
                      {f.open ? (
                        <section className="ml-4">
                          <DropDownTime
                            available={f}
                            AvailabilitySlots={f.AvailabilitySlots}
                            AvailabilityData={f.AvailabilityData}
                          />
                        </section>
                      ) : (
                        <section className="ml-auto w-full flex justify-end items-center text-sm text-semibold text-gray-600 font-inter my-auto">
                          Unavaliable
                        </section>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <Availability />
          </section>
        </div>
      </div>
    </>
  );
}

export default MyCalendar;
