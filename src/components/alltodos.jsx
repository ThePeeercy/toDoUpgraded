import React from "react";
import "../App.css";

function AllTodos({ todos }) {
  return (
    <div className="absolute left-0 bottom-0 bg-white z-10">
      <div className="flex flex-wrap w-full ">
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="border-2 border-amber-500 rounded mx-3 my-2 px-2 py-1"
            >
              {todo.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTodos;
