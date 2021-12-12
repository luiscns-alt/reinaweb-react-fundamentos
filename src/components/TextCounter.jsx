import React from "react";

export default function TextCounter({ limit }) {
  return (
    <div>
      <input type={"text"} maxLength={limit}></input>
    </div>
  );
}
