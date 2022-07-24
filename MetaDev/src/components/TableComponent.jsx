import React from "react";
import { FaChevronDown } from "react-icons/fa";
import RowComponent from "./RowComponent";

const TableComponent = () => {
  return (
    <div className=" mb-10 mt-5">
      <table class="table-auto min-h-full  bg-white w-[644px] border border-b-2">
        <thead className="border border-b-2">
          <tr className="font-inter text-[0.8125rem] font-semibold text-slate-600 ">
            <div className="flex items-center cursor-pointer hover:text-pink-600 justify-start w-[290px] py-2 px-4">
              <th className="mr-1">NAME</th>

              <div className="bg-white text-white hover:text-pink-600">
                <FaChevronDown />
              </div>
            </div>

            <th className="cursor-pointer w-[164px] py-2 px-4 text-right hover:text-pink-700">
              JOINED DATE
            </th>
            <th className=" text-right w-[174px] hover:text-pink-700 cursor-pointer py-2 px-4 ">
              REWARDS
            </th>
          </tr>
        </thead>
        <tbody>
          <RowComponent />
          <RowComponent />
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
