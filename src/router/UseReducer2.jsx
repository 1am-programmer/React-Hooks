import React, { useState, useReducer } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

const UseReducerII = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //Prevents our page from refreshing
    dispatch({
      type: ACTIONS.ADD_TODO,
      //payload is the data that we want to pass to the reducer function
      payload: { name: name },
      //which is the name in the state
    });
    setName("");
    //This clears the input after we hit enter
  };

  console.log(todos);
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        // if (todos.name.length < 2) {
        //   alert("Task must be at least 3 characters long");
        // } else {
        // }
        return [...todos, newTodo(action.payload.name)];

      case ACTIONS.TOGGLE_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            //todo.id === action.payload.id) means if the ID matches the current id
            return {
              ...todo,
              complete: !todo.complete,
              //change the complete from true to false, or vice versa
            };
          }
          return todo;
        });

      case ACTIONS.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id);
      //If the ID matches the current id, then return the todo without the current todo
      default:
        return todos;
    }
  }
  function newTodo(name) {
    return { name: name, id: Math.random(), complete: false };
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={name}
          className="p-4 px-16 border border-black rounded-lg"
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default UseReducerII;
