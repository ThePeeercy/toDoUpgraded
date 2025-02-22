import React from "react";
import { useTodo } from "../zustandStore/useTodo";

function todo({ todo }) {
  const { id, content, completed } = todo;

  const toggleElement = useTodo((state) => state.toggleElement);
  if (content.length > 25) {
  }
  const changeState = () => {
    toggleElement(todo.id);
  };
  return (
    <div className="overflow-scroll">
      <div
        className={`flex flex-row justify-between px-0.5 py-1.5 ${
          completed ? "bg-gray-300" : ""
        }`}
      >
        <div>
          <p className={`${completed ? "line-through" : ""} `}>
            <p className={`${completed ? "line-through" : ""}`}>
              {content.length > 20 ? content.slice(0, 20) + "..." : content}
            </p>
          </p>
        </div>
        <div>
          <input
            className="cursor-pointer"
            type="checkbox"
            checked={completed}
            onChange={changeState}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default todo;
