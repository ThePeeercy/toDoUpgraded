import React from "react";

function ToDo({ todo }) {
  const { content, completed } = todo;
  return (
    <div>
      <div className="flex flex-row justify-between  py-1.5">
        <div>
          <p>{content}</p>
        </div>
        <div>
          <input type="checkbox" defaultChecked={completed} />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ToDo;
