import React, { useState } from "react";
import Child from "./child";

function Parent(props) {
  return (
    <div>
      <button
        className="bg-blue-200 rounded px-3 py-2"
        onClick={() => props.setName("Parent")}
      >
        Parent
      </button>
      <Child setName={props.setName} />
    </div>
  );
}

export default Parent;
