import React, { useState } from "react";

function AddTodo({ addNewTodo }) {
  const [title, setTitle] = useState("");
  const submitTodo = e => {
    e.preventDefault();
    if (!title) return; // stop if title is empty
    addNewTodo(title);
    setTitle("");
  };
  return (
    <div className="bg-white rounded my-2 p1">
      <form onSubmit={submitTodo}>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Add a todo"
          className="p-2 text-sm text-grey-900 w-full"
          onChange={e => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
}

export default AddTodo;
