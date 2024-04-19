import React from "react";
import { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const InputRef = useRef();
  // UseRefs can also be used to store value of previous State eg ..
  const PrevName = useRef("");
  useEffect(() => {
    PrevName.current = name;
  }, [name]);

  //   useref always  take in one value, which is current
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    InputRef.current.focus();
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">USE REF</h2>
      {/* Use refs are hooks where you can store data that persists between renders, and do not cause your component to re render */}
      <p className="p-4">
        The useRef hook is used to create a mutable reference that persists
        across renders. Unlike state (useState) or effect (useEffect), changes
        to a ref don't trigger a re-render of the component. It's useful for
        accessing the DOM directly or for storing any mutable value that you
        want to persist between renders without causing a re-render.
      </p>

      <input
        type="text"
        value={name}
        ref={InputRef}
        onChange={(e) => setName(e.target.value)}
      />

      <p className="p-3">
        My name is {name} but it used to be {PrevName.current}
      </p>
      <button onClick={focus}>Focus</button>
      <p>I Rendered {renderCount.current} times</p>
    </div>
  );
};

export default UseRef;
