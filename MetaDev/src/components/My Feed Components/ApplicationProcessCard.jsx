import React from "react";

const ApplicationProcessCard = () => {
  return (
    <div className="ml-8 mb-5 mt-5">
      <div className="w-[682px] shadow-md rounded-lg h-fit bg-white border-2 flex-col items-start justify-start ">
        <div className="text-lg font-semibold font-inter p-6 ">
          <p>PREPARATION</p>
        </div>
        <div className="flex mx-6 items-start justify-start space-x-1">
          <p className="text-sm font-inter font-semibold">Duration:</p>
          <p className="text-sm font-inter">8 months</p>
        </div>
        <div className="flex mx-6 items-start justify-start space-x-1">
          <p className="text-sm font-inter font-semibold">Topics:</p>
          <p className="text-sm font-inter">
            Data Structures and Algorithms, Operating System, Database
            Management System, Object-Oriented Programming System
          </p>
        </div>
        <div className=" flex items-start mt-7 justify-start">
          <div className="px-6 flex flex-col items-center justify-center">
            <svg
              width="36"
              height="41"
              viewBox="0 0 36 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.1866 17.6205C28.1866 11.9777 23.461 7.42189 17.6967 7.58751C12.423 7.73815 8.07929 11.9328 7.82591 17.1253C7.67557 20.1947 8.92641 22.9787 11.0016 24.912C12.9965 26.7705 14.1595 29.3339 14.1595 32.0387V32.4307H21.8411V32.0396C21.8411 29.3156 23.0396 26.7572 25.0388 24.8746C26.9779 23.0477 28.1866 20.4735 28.1866 17.6205Z"
                fill="#FFED50"
              />
              <path
                d="M18 4.90289V0M11.4882 6.62235L9 2.37612M6.72043 11.3197L2.41132 8.86864M4.97551 17.7373H0M6.72043 24.1549L2.41132 26.6059M29.2796 24.1549L33.5887 26.6059M31.0245 17.7373H36M29.2796 11.3197L33.5887 8.86864M24.5127 6.62235L27 2.37612"
                stroke="#424242"
              />
              <path
                d="M14.1599 32.0391V32.4311M14.1599 32.4311H21.8415M14.1599 32.4311V35.3931M21.8415 32.4311V32.0399M21.8415 32.4311V35.3931M14.1599 35.3931V35.7734C14.1599 36.4717 14.7342 37.0384 15.4437 37.0384H20.5577C21.2663 37.0384 21.8415 36.4717 21.8415 35.7734V35.3931M14.1599 35.3931H21.8415M18.0003 40.0005C16.7089 40.0005 15.6624 38.9685 15.6624 37.6968V37.0384H20.3381V37.6968C20.3381 38.9685 19.2917 40.0005 18.0003 40.0005Z"
                stroke="#424242"
              />
              <path
                d="M9.7915 17.5808C9.7915 13.1131 13.4663 9.49194 18.0001 9.49194L9.7915 17.5808Z"
                fill="#FAFAFA"
              />
            </svg>
          </div>
          <div className="flex flex-col border-l-2 border-black mb-5  items-start justify-start px-3">
            <p className="text-lg font-inter font-semibold">PREPARATION TIP</p>
            <p>
              Do lot of hard work and practice of Data Structures and Algorithms
              based questions. I personally recommend you Coding Ninjas and
              Geeks For Geeks for interview preparation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcessCard;