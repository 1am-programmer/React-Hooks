import React from 'react'
import { useState } from 'react'

const Usestate = () => {

  const [count, setCount] = useState(0)
  //If you're writing complex maths or something, use the function method, because it will only run once i.e
  //  const [count, setCount] = useState(()=>{
  // console.log('run function')
  // return 0

  //})
  const [resourceType, setResourceType] = useState('posts')

  function decrement() {
    setCount(prevCount => prevCount - 1)
    // Using the function method is advised, because if Set count is to be called twice(setCount (count-1),setCount (count-1))
    // it will overwrite the first set count, without actually 
    // providing the desired result
  }
  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  // setState(oldState=> {
  //   return { number: oldState.number + 1}
  // })  
  // Using this method will Just ovewrite the state, and not show the theme key and value., so to display that, we use the spread our old state,
  // before writing our new state

  return (
    <div>
      <h3>USE STATE</h3>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>

     {/* Anotherexample */}


      <div>
      <h4>  Example2</h4>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <p>{resourceType}</p>

    </div>

  )
}

export default Usestate

