import React, { useState } from "react";
import Parent from "./parent";

function Grandparent() {
  const [name, setName] = useState("Grandparent");

  return (
    <div className="mt-5 mx-5 pt-5 px-5">
      <p className="text-lg my-3">I am {name}</p>
      <Parent setName={setName} />
    </div>
  );
}

export default Grandparent;
