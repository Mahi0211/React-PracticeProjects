import { useState } from 'react';
import './App.css'

function App() {
// let counter = 15

const [counter, setCounter]= useState(0)

const addValue = () => {
  setCounter((prevCounter) => prevCounter + 10 )
  setCounter((prevCounter) => prevCounter + 1 )
  setCounter((prevCounter) => prevCounter + 2 )
  setCounter((prevCounter) => prevCounter + 3 )
}
const removeValue = () => {
  setCounter(counter - 1)
}
  return (
    <>
      <h1>React Course {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
