import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

function AddNewTiming({
  timing,
  addRemove,
  updateState,
  setUpdateState,
  saveInputs,
}) {
  const [startinput, setStartInput] = useState("set Time");
  const [endinput, setEndInput] = useState("set Time");
  const [startDropdown, setStartDropdown] = useState(false);
  const [endDropdown, setEndDropdown] = useState(false);

  function CheckTime() {
    let StartHours = startinput[0] + startinput[1];
    let EndHours = endinput[0] + endinput[1];
    let StartMinutes = startinput[3] + startinput[4];
    let EndMinutes = endinput[3] + endinput[4];
    if (StartHours < 9) StartHours = +StartHours + 12;
    if (EndHours < 9) EndHours = +EndHours + 12;
    // console.log(StartHours, EndHours);
    return (
      <div className="text-xs text-red-500 w-full h-fit rounded ml-4">
        {StartHours + StartMinutes > EndHours + EndMinutes
          ? "Select Valid Time"
          : ""}
      </div>
    );
  }

  function StartTime() {
    return (
      <div>
        <button
          onMouseOver={() => {
            setStartDropdown(true);
          }}
          onMouseLeave={() => {
            setStartDropdown(false);
          }}
          className={`inline-flex items-center tracking-tight focus:border-2 font-inter focus:border-indigo-500 ${
            startinput !== "set Time" ? "text-back" : "text-slate-400"
          } justify-between w-[130px] rounded-xl border border-gray-400 p-2 h-fit`}
        >
          {startinput}
          <div className="px-2 flex items-center justify-center">
            <FaChevronDown />
          </div>
        </button>
        {startDropdown && (
          <div
            className="origin-center block z-20 bg-white absolute w-[130px] h-52 overflow-y-scroll
            rounded-md shadow-lg focus:outline-none font-inter "
            onMouseOver={() => {
              setStartDropdown(true);
            }}
            onMouseLeave={() => {
              setStartDropdown(false);
            }}
          >
            {timing.map((t, index) => {
              return (
                <div
                  onClick={() => {
                    setStartInput(t.time);
                    setStartDropdown(false);
                  }}
                  key={index}
                  className="cursor-pointer text-[14px] block hover:bg-slate-50 py-2 px-4 "
                >
                  {t.time}
                </div>
              );
            })}
          </div>
        )}
        <CheckTime />
      </div>
    );
  }

  function EndTime() {
    return (
      <div>
        <button
          onMouseOver={() => {
            setEndDropdown(true);
          }}
          onMouseLeave={() => {
            setEndDropdown(false);
          }}
          className={`inline-flex items-center tracking-tight focus:border-2 font-inter focus:border-indigo-500 ${
            endinput !== "set Time" ? "text-back" : "text-slate-400"
          } justify-between w-[130px] rounded-xl border border-gray-400 p-2 h-fit`}
        >
          {endinput}
          <div className="px-2 flex items-center justify-center">
            <FaChevronDown />
          </div>
        </button>
        {endDropdown && (
          <div
            className="origin-center block z-20 bg-white absolute w-[130px] h-52 overflow-y-scroll
            rounded-md shadow-lg focus:outline-none font-inter "
            onMouseOver={() => {
              setEndDropdown(true);
            }}
            onMouseLeave={() => {
              setEndDropdown(false);
            }}
          >
            {timing.map((t, index) => {
              return (
                <div
                  onClick={() => {
                    setEndInput(t.time);
                    setEndDropdown(false);
                  }}
                  key={index}
                  className="cursor-pointer text-[14px] block hover:bg-slate-50 py-2 px-4 "
                >
                  {t.time}
                </div>
              );
            })}
          </div>
        )}
        <CheckTime />
      </div>
    );
  }
  return (
    <>
      <section className="flex my-2 items-center">
        <StartTime />
        <div className="mx-6">-</div>
        <EndTime />
        <div
          className="text-xl ml-4 hover:text-red-700 text-gray-600 rotate-45 "
          onClick={() =>
            saveInputs.pop() && addRemove.pop() && setUpdateState(!updateState)
          }
        >
          <MdAdd />
        </div>
        <div
          className="text-3xl ml-4 hover:text-black text-gray-800 "
          onClick={() => {
            saveInputs.push({ start: startinput, end: endinput }) &&
              addRemove.push(1) &&
              setUpdateState(!updateState);
          }}
        >
          <MdAdd />
        </div>
      </section>
    </>
  );
}

export default AddNewTiming;
