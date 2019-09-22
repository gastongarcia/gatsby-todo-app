import React, { useState } from "react";

function Child(props) {
  return (
    <div>
      <button
        className="bg-blue-200 rounded px-3 py-2 mt-2"
        onClick={() => props.setName("Child")}
      >
        Child
      </button>
    </div>
  );
}

export default Child;
