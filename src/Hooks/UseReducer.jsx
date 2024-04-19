import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  // action is what we pass into this dispatch function,
  //So whatever we call dispatch function with, is going to get set with the action variable
  //And the reducer function will return a new updated state

  //SWITCH CASE
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }

  //IF AND ELSE
  //   if (action.type === ACTIONS.INCREMENT) {
  //     return { count: state.count + 1 };
  //   } else if (action.type === ACTIONS.DECREMENT) {
  //     return { count: state.count - 1 };
  //   } else {
  //     return state;
  //   }
}

const UseReducer = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // The state is the origin state in our component, i.e "Count 0"
  // While the dispatch is the function we use to update our state, it will recall the reducer function, given certain parameters

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
    // setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
    // setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">USE REDUCER</h2>
      <p>
        The useReducer hook is an alternative to useState for managing complex
        state logic in functional components. It's typically used when the state
        logic involves multiple sub-values or when the next state depends on the
        previous one. useReducer is inspired by the reducer function used in
        JavaScript's Array.reduce(). It accepts a reducer function and an
        initial state, and returns the current state paired with a dispatch
        method. The reducer function takes the current state and an action as
        arguments, and returns the new state based on the action.
      </p>

      <div>
        <p className="p-4 font-semibold text-2xl">
          Example 1: increment and decrement
        </p>

        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default UseReducer;
