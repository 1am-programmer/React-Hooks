import React, { useState, useEffect, useLayoutEffect } from "react";

const UseLayout = () => {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">USE LAYOUT EFFECT</h2>
      <p>
        In React, the useLayoutEffect hook is similar to the useEffect hook, but
        it runs synchronously after all DOM mutations. This can be useful when
        you need to perform some action that relies on the DOM being updated
        immediately after the component has rendered.
      </p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <div>{count}</div>
    </div>
  );
};

export default UseLayout;
