import React, { useEffect } from "react";

//Anytime a varible changes, i want to log that variable to my console
export default function useUpdateLogger(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}
