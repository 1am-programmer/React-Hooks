import React, { useState, useEffect } from "react";

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
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)); //We can only send JSON to localStorage
  }, [value]);
  //Only when our value changes, do we want to save it to the local storage

  return [value, setValue];
}
