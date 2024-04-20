import React, { useState, useCallback } from "react";
import TheList from "../router/TheList";

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItem = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  //The use of the useCallback here is that it only recreates our getItem only when the number changes
  //That way when we toggle our theme it won't console.log the "updating items"

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">USE CALLBACK</h2>
      <p>
        A callback function is a function that is passed as an argument to
        another function or component and is intended to be called at a later
        time. Callbacks are commonly used in React for various purposes, such as
        handling events, asynchronous operations, or updating state.
      </p>

      <div style={theme} className="p-16">
        <input
          type="number"
          className="p-5"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle Theme
        </button>
        <TheList getItem={getItem} />
      </div>
    </div>
  );
};

export default UseCallback;
