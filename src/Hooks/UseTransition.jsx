import React, { useState, useEffect, useTransition } from "react";

const UseTransition = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;
  function handleChange(e) {
    setInput(e.target.value);

    const l = [];
    for (let index = 0; index < LIST_SIZE; index++) {
      l.push(e.target.value);

      //l is an array, using the for loop, continue incrementing the index until it is = to LIST_SIZE, which is 20,000
      //And push what ever is gotten from the input value into the array and render it 20,000 times, when the value of the input changes
      setList(l);
      //Let the list array be equal to the l array
    }
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">USE TRANSITION</h2>
      <p>
        UseTransition in React allows us to make two different state changes at
        the same time and rank them in order of how important we want them to
        be.
        {/* The first stage is the initial render, and the second stage is the update. */}
      </p>

      <input type="text" value={input} onChange={handleChange} />
      {list.map((item, index) => {
        return <div key={index}> {item} </div>;
        //Return a div showing each item of the list array
      })}

      {/* <button onClick={() => console.log(list.length)}>hi</button> */}
    </div>
  );
};

export default UseTransition;
