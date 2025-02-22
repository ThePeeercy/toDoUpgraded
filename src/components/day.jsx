import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { addDays, format } from "date-fns";
import useToggle from "../hooks/useToggle";
import { RxCross2 } from "react-icons/rx";
import { useTodo } from "../zustandStore/useTodo";
import ToDo from "./todo";

function Day({ days, todos }) {
  const tomorrow = addDays(days, 1);
  const { open, change } = useToggle();
  const [newMission, setNewMission] = useState("");
  const addTodo = useTodo((state) => state.addTodo);

  function exportNextDay() {
    const updatedItems = todos.map((item) => {
      if (item.day === format(days, "yyyy-MM-dd") && item.completed === false) {
        return { ...item, day: format(tomorrow, "yyyy-MM-dd") };
      }
      return item;
    });
    useTodo.getState().setTodos(updatedItems);
  }

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
    <div className="px-4 py-2 flex flex-col">
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <p className="text-xl font-bold self-center mr-1.5">
              {format(days, "EEE")}
            </p>
            <FaArrowRight
              onClick={exportNextDay}
              className="self-center cursor-pointer "
            />
          </div>
          <div>
            <p className="text-lg font-bold">{format(days, "dd")}</p>
          </div>
        </div>
        <hr />
      </div>

      {todos.map((todo) => {
        return <ToDo key={todo.id} todo={todo} />;
      })}

      <button
        onClick={change}
        className="cursor-pointer flex mt-4 flex-row px-2 py-1 border-2 border-black bg-gray-500 rounded self-center"
      >
        <FaPlus className="self-center " /> Add Task
      </button>

      {open && (
        <div className="flex flex-col absolute -translate-y-1/2 -translate-x-1/2  top-3/6 left-3/6 justify-between h-2/6 w-3/6 bg-gray-500 px-6 py-5">
          <div className="flex flex-row justify-between">
            <p>{format(days, "dd.MM.yyyy")}</p>
            <RxCross2 onClick={change} />
          </div>
          <div>
            <input
              className="w-full h-10 border-2 border-black rounded px-1.5 outline-none"
              type="text"
              placeholder="Enter new task"
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

export default Day;
