import React from "react";
import { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(0);
  //If you're writing complex maths or something, use the function method, because it will only run once i.e
  //  const [count, setCount] = useState(()=>{
  // console.log('run function')
  // return 0

  //})
  const [resourceType, setResourceType] = useState("posts");

  function decrement() {
    setCount((prevCount) => prevCount - 1);
    // Using the function method is advised, because if Set count is to be called twice(setCount (count-1),setCount (count-1))
    // it will overwrite the first set count, without actually
    // providing the desired result
  }
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  // setState(oldState=> {
  //   return { number: oldState.number + 1}
  // })
  // Using this method will Just ovewrite the state, and not show the theme key and value.,
  // so to display that, we use the spread our old state,
  // before writing our new state

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">USE STATE</h2>
      <p>
        useState is a hook that allows functional components to manage state.
        Before the introduction of hooks in React 16.8, state management was
        primarily done in class components using this.state. With the
        introduction of hooks, functional components can now also have stateful
        logic. The useState hook takes one argument, which is the initial state
        value, and returns an array with two elements: the current state value
        and a function to update that state.
      </p>
      <div>
        <p className="p-4 font-semibold text-2xl">
          Example 1: increment and decrement
        </p>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>

      {/* Anotherexample */}

      <div>
        <p className="p-4 font-semibold text-2xl">
          Example 2: Button returns its content in a div
        </p>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <p>{resourceType}</p>
    </div>
  );
};

export default Usestate;
