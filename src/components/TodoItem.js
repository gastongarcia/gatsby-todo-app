import React from "react";
// import TodoButtons from "./TodoButtons";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <p
        className="todo-text"
        style={{ textDecoration: props.completed ? "line-through" : "none" }}
      >
        {props.title}
      </p>
      <p className="text-xs">{props.id}</p>
      <button
        className="todo-button bg-green-700"
        onClick={() => props.markTodoCompleted(props.id)}
      >
        Done
      </button>{" "}
      <button
        className="todo-button bg-red-700"
        onClick={() => props.deleteTodo(props.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
