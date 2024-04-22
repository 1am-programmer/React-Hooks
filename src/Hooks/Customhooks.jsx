import React, { useState, useDebugValue } from "react";
import useLocalStorage from "../router/LocalStorage";
import useUpdateLogger from "../router/UseUpdateLogger";

const Customhooks = () => {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  //Anytime our name changes, it logs it to the console
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">CUSTOM HOOK</h2>
      <p>
        Custom hooks are a way to reuse stateful logic between components.{" "}
        <br /> THIS IS A CUSTOM HOOK USE TO STORE VARIABLES ON THE LOCAL STORAGE
      </p>
      <p className="italic text-[15px] mb-4">
        To create a custom hook, it is adviseable you start with USE..
      </p>
      <input
        className="mt-4 p-5"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Customhooks;
