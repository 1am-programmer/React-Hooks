import React, { useState, useRef } from "react";
import CustomInput from "../router/CustomInput";

const UseImperative = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">USE IMPERATIVE HANDLE</h2>
      <p>
        The useImperativeHandle hook in React is crucial for encapsulating
        component logic, selectively exposing imperative methods or properties
        to parent components, optimizing performance by minimizing unnecessary
        references, and enabling interoperability with external libraries or
        imperative APIs. This controlled exposure ensures cleaner separation of
        concerns, predictable interactions, and efficient component management,
        making it an essential tool for building robust and performant React
        applications.
      </p>

      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current.alertHI()}>Focus</button>

      <div>
        <h2 className="pt-4 mb-4 text-2xl font-bold">Example 2</h2>
      </div>
    </div>
  );
};

export default UseImperative;
