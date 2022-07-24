import React from "react";
import "./Stepper.css";

const Stepper = () => {
  return (
    <div className="navmenu">
      <ul>
        <li>
          <p className="active">Signed In</p>
        </li>
        <li>
          <p className="active">Created a Post</p>
        </li>
        <li>
          <p className="active">Accepted a friend</p>
        </li>
        <li>
          <p>Rewards Collected</p>
        </li>
      </ul>
    </div>
  );
};

export default Stepper;
