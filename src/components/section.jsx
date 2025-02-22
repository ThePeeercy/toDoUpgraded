import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { getWeekOfMonth, addDays, format } from "date-fns";
import useToggle from "../hooks/useToggle";
import { useTodo } from "../zustandStore/useTodo";

function Section({ days }) {
  const { open, change } = useToggle();
  const [newMission, setNewMission] = useState("");
  const addTodo = useTodo((state) => state.addTodo);

  function createTodo() {
    if (newMission.trim() === "") return;
    const newItem = {
      id: Math.floor(Math.random() * 9999999),
      content: newMission,
      completed: false,
      day: format(days, "yyyy-MM-dd"),
    };

    addTodo(newItem);
    setNewMission("");
  }

  return (
    <div className="flex flex-row justify-between px-4 py-2">
      <div className=" flex flex-row ">
        <div className="flex flex-row bg-gray-400 rounded px-1.5 py-0.5 mr-1.5">
          <FaCalendarAlt className="self-center mr-1 " /> <p>This Week</p>
        </div>
        <div
          onClick={change}
          className="flex flex-row bg-gray-400 rounded px-1.5 py-0.5 cursor-pointer"
        >
          <FaPlus className="self-center mr-0.5" /> <p>Add for today </p>
        </div>
      </div>
      <div className="flex flex-row">
        <FaArrowLeftLong className="self-center" />{" "}
        <p className="mx-1.5 font-bold">Week {getWeekOfMonth(days)}</p>
        <FaArrowRightLong className="self-center" />
      </div>
      {open && (
        <div className="flex flex-col absolute -translate-y-1/2 -translate-x-1/2  top-3/6 left-3/6 justify-between h-2/6 w-3/6 bg-gray-500 px-6 py-5">
          <div className="flex flex-row justify-between">
            <p>{format(days, "dd.MM.yyyy")}</p>
            <RxCross2 onClick={change} className="" />
          </div>
          <div>
            <input
              className="w-full h-10 border-2 border-black rounded px-1.5 outline-none"
              type="text"
              placeholder="enter new mission"
              value={newMission}
              onChange={(e) => setNewMission(e.target.value)}
            />
          </div>
          <div className="self-center ">
            <button
              className="border-2 border-black rounded py-1.5 px-3"
              onClick={createTodo}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section;
