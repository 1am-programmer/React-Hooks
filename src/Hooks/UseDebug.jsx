import React, { useState } from "react";
import useLocalStorage from "../router/LocalStorage";

const UseDebug = () => {
  const [firstName, setFirstName] = useLocalStorage("firstName", "Kyle");
  const [lastName, setLastName] = useState("Cook");
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">USE DEBUG VALUE</h2>
      <p>
        In ReactJS, the useDebugValue hook is used to display custom labels for
        custom hooks in React DevTools. It's particularly useful for providing
        additional debugging information about custom hooks when inspecting them
        in the React DevTools.
      </p>

      <h2 className="pt-4 mb-4 text-xl font-bold">Example 1</h2>
      <p className="italic">
        View in Component section of your react dev tools
      </p>

      <div className="flex gap-2 mb-2">
        <p>First Name:</p>
        <input
          type="text"
          className="border p-3"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <p>Last Name:</p>
        <input
          className="border p-3"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseDebug;
