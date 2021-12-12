import React, { useState } from "react";

export default function TextCounter({ limit }) {
  const [state, setstate] = useState(5);
  return (
    <div>
      contador: {state}
      <input type={"text"} maxLength={limit}></input>
    </div>
  );
}
