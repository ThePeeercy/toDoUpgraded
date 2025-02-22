import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { getWeekOfMonth, addDays, format } from "date-fns";

function Section({ days }) {
  return (
    <div className="flex flex-row justify-between px-4 py-2">
      <div className=" flex flex-row ">
        <div className="flex flex-row bg-gray-400 rounded px-1.5 py-0.5 mr-1.5">
          <FaCalendarAlt className="self-center mr-1 " /> <p>This Week</p>
        </div>
        <div className="flex flex-row bg-gray-400 rounded px-1.5 py-0.5">
          <FaPlus className="self-center mr-0.5" /> <p>Add for today </p>
          <div className="flex flex-row bg-gray-500 rounded ml-2 px-0.5">
            <RxCross2 className="self-center text-sm" />{" "}
            <p className="self-center text-sm">Enter</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <FaArrowLeftLong className="self-center" />{" "}
        <p className="mx-1.5 font-bold">Week {getWeekOfMonth(days)}</p>
        <FaArrowRightLong className="self-center" />
      </div>
    </div>
  );
}

export default Section;
