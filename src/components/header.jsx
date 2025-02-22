import React from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { startOfWeek, addDays, format } from "date-fns";

function header({ days }) {
  return (
    <div>
      <div className="bg-gray-400 flex px-4 py-2 flex-row align-middle justify-between">
        <div>{format(days, "MMMM yyyy")}</div>
        <div className="flex flex-row">
          <div className="flex flex-row bg-gray-500 rounded px-1.5 py-0.5 mr-1">
            <FaSearch className="self-center text-sm" />{" "}
            <input
              className="w-30 ml-1 outline-none"
              type="text"
              placeholder="Search"
            />
            <div className="flex flex-row bg-gray-600 rounded px-1 ">
              <RxCross2 className="self-center" />{" "}
              <p className="text-sm self-center">F</p>
            </div>
          </div>
          <BsThreeDots className="self-center mr-1.5 " />
          <IoPersonSharp className="self-center" />
        </div>
      </div>
    </div>
  );
}

export default header;
