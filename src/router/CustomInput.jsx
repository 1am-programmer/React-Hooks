import React, { useImperativeHandle } from "react";

function CustomInput({ style, ...props }, ref) {
  useImperativeHandle(
    ref,
    () => {
      return { alertHI: () => alert("I'm an alert") };
    },
    []
    // [props.value]
  ); //Anytime our value changes

  return (
    <input
      {...props}
      style={{
        border: "none",
        backgroundColor: "red",
        padding: "10px",
        borderBottom: "2px solid #000",
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
        ...style,
      }}
    />
  );
}

//If you wanted to have a ref pointing to your input, use the forwardRef method,
// but if you want to use the ref to access the input and change it to something entirely different, you can use the useImperativeHandle method.

export default React.forwardRef(CustomInput);
