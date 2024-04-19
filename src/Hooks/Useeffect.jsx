import React, { useState, useEffect } from "react";

const Useeffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [windoWidth, setWindoWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
  //The useEffect takes a second parameter which is an array, which you pass values,
  //and when these values change, your hook runs."

  //So if you keep clicking on one of the buttons, the useEffect hook will not run until you click another,
  //that way the value in the array has changed.

  //And when the array is empty, the useEffect only runs on startup and never rerenders
  //until a value is passed to the array and changed

  // Anytime we render our application, RunEffect is being printed out.
  // But you may want to do certain things when your component mounts or specific resource in your page changes

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindoWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindoWidth(window.innerWidth);
      });
    };

    //Always add a return statement after your useEffect, so that it cleans up or undoes the useEffect when it is no longer needed
  }, []);
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">USE EFFECT</h2>
      <p>
        The useEffect hook is used to perform side effects in functional
        components. Side effects can include things like fetching data from an
        API, subscribing to external events, manipulating the DOM, and more.
        useEffect is called after every render of the component, including the
        initial render. It accepts two arguments: a function representing the
        side effect to perform, and an optional array of dependencies. The
        function passed to useEffect is the side effect itself, and it can
        return a cleanup function to clean up any resources created during the
        side effect.
      </p>

      <p className="p-4 font-semibold text-2xl">
        Example 1: to get browser size, Please resize your browser window
      </p>
      <div>{windoWidth}</div>

      <div>
        <p className="p-4 font-semibold text-2xl">
          Example 2: Using json placeholder API to get data
        </p>
        <div className="mb-4 italic text-[20px]">
          Click on the buttons, to get content
        </div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <p>{resourceType}</p>
      <div>
        {items.map((item) => {
          return <p>{JSON.stringify(item)}</p>;
        })}
      </div>
      {/* JSON.stringify is a method in JavaScript that converts JavaScript objects into JSON strings. 
This is commonly used when you want to send data to a server or store it locally. */}
    </div>
  );
};

export default Useeffect;
