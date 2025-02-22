import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import ToDoList from "./todolist";
import { format } from "date-fns";
import useToggle from "../hooks/useToggle";
import { RxCross2 } from "react-icons/rx";
import { useTodo } from "../zustandStore/useTodo";

function Day({ days, todos, todosKey }) {
  const { open, change } = useToggle();
  const [newMission, setNewMission] = useState("");

  function createTodo() {
    const newItem = {
      id: Math.floor(Math.random() * 9999999),
      content: newMission,
      completed: false,
    };

    useTodo.getState().addTodo(newItem, todosKey);
    setNewMission(""); // Yeni görevi ekledikten sonra inputu sıfırlıyoruz
  }

  return (
    <div className="px-4 py-2 flex flex-col">
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <p className="text-xl font-bold self-center mr-1.5">
              {format(days, "EEE")}
            </p>
            <FaArrowRight className="self-center " />
          </div>
          <div>
            <p className="text-lg font-bold">{format(days, "dd")}</p>
          </div>
        </div>
        <hr />
      </div>
      <ToDoList todos={todos} />
      <button
        onClick={change}
        className="flex mt-4 flex-row px-2 py-1 border-2 border-black bg-gray-500 rounded self-center"
      >
        <FaPlus className="self-center " /> Add Task
      </button>
      {open && (
        <div className="flex flex-col absolute -translate-y-1/2 -translate-x-1/2  top-3/6 left-3/6 justify-between h-3/6 w-3/6 bg-gray-500 px-4 py-4">
          <div className="flex flex-row justify-between">
            <p>{format(days, "dd.MM.yyyy")}</p>
            <RxCross2 onClick={change} className="" />
          </div>
          <div>
            <input
              type="text"
              placeholder="enter new mission"
              value={newMission}
              onChange={(e) => setNewMission(e.target.value)}
            />
          </div>
          <div className="self-center ">
            <button onClick={createTodo}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Day;
