import React, { useState, useRef } from "react";
import CustomInput from "../router/CustomInput";
import ConfirmationModal from "../router/ConfirmationModal";

const UseImperative = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const [open, setOpen] = useState(false);
  const modalRef = useRef();
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

      <h2 className="pt-4 mb-4 text-2xl font-bold">Example 1</h2>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current.alertHI()}>Focus</button>
      <p className="italic">
        This button when clicked does not affect the input value, but instead
        triggers the alert method on the input element.
      </p>

      <div>
        <h2 className="pt-4 mb-4 text-2xl font-bold">Example 2</h2>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Open
        </button>

        <button>Focus Close</button>
        <button>Focus Confirm</button>
        <button>Focus Deny</button>

        <ConfirmationModal
          ref={modalRef}
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default UseImperative;
