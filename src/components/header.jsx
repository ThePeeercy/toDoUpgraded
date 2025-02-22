import React from "react";
import { FaSearch } from "react-icons/fa";

import { BsThreeDots } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { startOfWeek, addDays, format } from "date-fns";
import useToggle from "../hooks/useToggle";
import useToggle2 from "../hooks/useToggle2";
import { IoMdSettings } from "react-icons/io";
import { FaArchive } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { IoPrintSharp } from "react-icons/io5";
import { useState } from "react";

function header({ days, todos }) {
  const { open, change } = useToggle();
  const { show, toggle } = useToggle2();
  console.log(todos);

  const { search, setSearch } = useState("");
  return (
    <div>
      <div className="bg-gray-400 flex px-4 py-2 flex-row align-middle justify-between">
        <div>{format(days, "MMMM yyyy")}</div>
        <div className="flex flex-row">
          <div className="flex flex-row bg-gray-500 rounded px-1.5 py-0.5 mr-1">
            <FaSearch className="self-center text-sm" />

            <input
              className="w-30 ml-1 outline-none"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <BsThreeDots
            onClick={change}
            className="self-center mr-1.5 mx-3 cursor-pointer"
          />
          <IoPersonSharp className="self-center mx-3 cursor-pointer" />
        </div>
      </div>
      {open && (
        <div className="absolute top-11 right-13 bg-gray-600">
          <div className="flex flex-row  px-3 py-1.5 hover:bg-gray-400 cursor-pointer">
            <IoMdSettings className="mr-2 self-center" /> Settings
          </div>
          <hr />
          <div className="flex flex-row px-3 py-1.5 hover:bg-gray-400 cursor-pointer">
            <FaArchive className="mr-2 self-center" /> Archive
          </div>
          <hr />
          <div
            onClick={toggle}
            className="flex flex-row px-3 py-1.5 hover:bg-gray-400 cursor-pointer"
          >
            <GoTasklist className="mr-2 self-center" /> Unscheduled
          </div>
          <hr />
          <div className="flex flex-row px-3 py-1.5 hover:bg-gray-400 cursor-pointer">
            <IoPrintSharp className="mr-2 self-center" /> Print Week View
          </div>
        </div>
      )}
    </div>
  );
}

export default header;
