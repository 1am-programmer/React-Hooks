import React, { useState, useEffect } from 'react'



const Useeffect = () => {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  const [windoWidth, setWindoWidth] = useState(window.innerWidth)


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    console.log('run effect')
  }, [resourceType])    //The useEffect takes a second parameter which is an array, which you pass values, 
  //and when these values change, your hook runs."

  //So if you keep clicking on one of the buttons, the useEffect hook will not run until you click another, 
  //that way the value in the array has changed.

  //And when the array is empty, the useEffect only runs on startup and never rerenders 
  //until a value is passed to the array and changed


  // Anytime we render our application, RunEffect is being printed out.
  // But you may want to do certain things when your component mounts or specific resource in your page changes
  

  useEffect(() => {
   window.addEventListener('resize', () => {
     setWindoWidth(window.innerWidth)
   })

   return () => {
     window.removeEventListener('resize', () => {
       setWindoWidth(window.innerWidth)
     })
   }

   //Always add a return statement after your useEffect, so that it cleans up or undoes the useEffect when it is no longer needed
  }, [])
  return (
    <div>
      <h3>Use Effects</h3>

      <div>

        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <p>{resourceType}</p>
      <div  class='done'>
      {items.map((item => {
        return <p >{JSON.stringify(item)}</p>
      }))}
      </div>
      {/* JSON.stringify is a method in JavaScript that converts JavaScript objects into JSON strings. 
This is commonly used when you want to send data to a server or store it locally. */}


      
      <h2> Another example </h2>
      <div>
        {windoWidth}
      </div>


    </div>
  )
}

export default Useeffect
