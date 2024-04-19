import React, { useState, useContext } from "react";
import FunctionContext from "../router/FunctionContext";
import ClassContext from "../router/ClassContext";
export const ThemeContext = React.createContext();

const UseContext = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">USE CONTEXT</h2>
      <p>
        The useContext is a hook that provides a way to consume context within a
        functional component. Context is a mechanism for sharing values like
        themes, locale preferences, or any data that needs to be accessible by
        many components at different nesting levels, without explicitly passing
        props through every level of the component tree.
      </p>
      {/* There are two things to note in useContext 1. The Context provider, which we want to wrap all the codes that needs access to
      2. Single props passed, which is value={whatever the value of the context is}
      */}
      <ThemeContext.Provider value={darkTheme}>
        <p className="p-4">Example 1: Toggle Theme</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContext />
        <ClassContext />
        {/* All this components below will have access to the darkTheme value, even their children */}
        {/* Context is to pass data from one component to another without passing props down the tree. */}
      </ThemeContext.Provider>
    </div>
  );
};

export default UseContext;
