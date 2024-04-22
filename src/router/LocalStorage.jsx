import React, { useState, useEffect, useDebugValue } from "react";

function getSavedValue(key, initialValue) {
  //Key is what we want to store this as in the local storage
  const savedValue = JSON.parse(localStorage.getItem(key));
  //This will get the value stored in the key location

  if (savedValue) return savedValue;
  //If there is a value stored in the key location, it will return the value stored in the key location , but If there is nothing stored in the key location, it will return the initial value

  if (initialValue instanceof Function) return initialValue();
  // If initialValue is a function, it will return the value of the function, and If initialValue is not a function, it will return the initialValue

  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  //usedebug.jsx
  useDebugValue("Nested objects in useDebug");
  //useDebugValue(slowFunction(value)); //This will be really slow to run so we use this
  useDebugValue(value, (v) => slowFunction(v)); // This function method will tell react TO NOT RUN THIS CODE, unless
  // 1. I am in development, 2. I have the chrome developers tool open and ready to see the
  useDebugValue({ key, initialValue });
  //This will show the value of the Input value variable in the React Dev Tools,.. coming from useDebugValue.jsx

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)); //We can only send JSON to localStorage
  }, [value]);
  //Only when our value changes, do we want to save it to the local storage

  function slowFunction(value) {
    for (let index = 0; index < 20000000000; index++) {}
    return value;
  }
  return [value, setValue];
}
