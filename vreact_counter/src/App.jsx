import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  //let counter = 15
  const addValue = ()=>{
    setCounter(counter+1)
  }
  const subValue = ()=>{
    if( counter > 0){
      setCounter(counter-1)
    }
  }
  return (
    <>
     <h1>Counter</h1> 
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <button onClick={subValue}>Substract Value</button>
    </>
  )
}

export default App
