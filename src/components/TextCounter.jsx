import React, { useState } from "react";

export default function TextCounter({ limit, ...props }) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
    if (event.target.value.length >= limit) {
      props?.onLimit();
    }
  }

  return (
    <div>
      <input
        type={"text"}
        maxLength={limit}
        value={text}
        onChange={handleChange}
      ></input>
      {text.length}/{limit}
    </div>
  );
}
