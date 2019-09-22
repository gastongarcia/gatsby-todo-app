import React from "react";

function TodoButtons(props) {
  return (
    <>
      <button className="todo-button bg-green-700">Done</button>{" "}
      <button onClick={deleteClick} className="todo-button bg-red-700">
        Delete
      </button>
      <p>ID:{props.id}</p>
    </>
  );
}

export default TodoButtons;
