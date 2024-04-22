import React, { useId } from "react";

export default function Email() {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} className="p-2 m-2" />

      <br />

      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`} className="p-2 m-2" />
    </div>
  );
}
