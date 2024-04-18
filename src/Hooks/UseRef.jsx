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
      <h4>Use ref</h4>
      {/* Use refs are hooks where you can store data that persists between renders, and do not cause your component to re render */}

      <input
        type="text"
        value={name}
        ref={InputRef}
        onChange={(e) => setName(e.target.value)}
      />

      <p>
        My name is {name} but it used to be {PrevName.current}
      </p>
      <button onClick={focus}>Focus</button>
      <p>I Rendered {renderCount.current} times</p>
    </div>
  );
};

export default UseRef;
