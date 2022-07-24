import React, { useState, useEffect } from "react";
import AddNewTiming from "./AddNewTiming";

const DropDownTime = (available, AvailabilitySlots, AvailabilityData) => {
  const [timing, setTiming] = useState([
    { time: "09:00 AM" },
    { time: "09:30 AM" },
    { time: "10:00 AM" },
    { time: "10:30 AM" },
    { time: "11:00 AM" },
    { time: "11:30 AM" },
    { time: "12:00 AM" },
    { time: "12:30 PM" },
    { time: "01:00 PM" },
    { time: "01:30 PM" },
    { time: "02:00 PM" },
    { time: "02:30 PM" },
    { time: "03:00 PM" },
    { time: "03:30 PM" },
    { time: "04:00 PM" },
    { time: "04:30 PM" },
    { time: "05:00 PM" },
    { time: "05:30 PM" },
    { time: "06:00 PM" },
    { time: "06:30 PM" },
    { time: "07:00 PM" },
    { time: "07:30 PM" },
    { time: "08:00 PM" },
    { time: "08:30 PM" },
  ]);
  const [addRemove, setAddRemove] = useState([]);
  const [updateState, setUpdateState] = useState(true);
  const [saveInputs, setSaveInputs] = useState([]);
  useEffect(() => {}, [addRemove.length]);
  // console.log(saveInputs);

  // console.log(available);

  return (
    <div className="flex items-center justify-start">
      <div className="flex flex-col">
        <AddNewTiming
          timing={timing}
          addRemove={addRemove}
          setAddRemove={setAddRemove}
          updateState={updateState}
          setUpdateState={setUpdateState}
          saveInputs={saveInputs}
        />
        {addRemove.map((a, index) => {
          return (
            <AddNewTiming
              timing={timing}
              key={index}
              addRemove={addRemove}
              setAddRemove={setAddRemove}
              updateState={updateState}
              setUpdateState={setUpdateState}
              saveInputs={saveInputs}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DropDownTime;
