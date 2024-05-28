import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  let obj={
    desc:"Gaurav is scripting in JavaScript.",
    username:"Gaurav",
    img:"https://images.pexels.com/photos/770129/pexels-photo-770129.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
  }
  let obj2={
    //desc:"Kirti is Lawyering Up.",
    username:"Kirti",
    img:"https://images.pexels.com/photos/4078092/pexels-photo-4078092.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
    
  }
  return (
    <>
      <Card details={obj} button="View profile" />
      <Card details={obj2} button="Get Quote" />
    </>
  )
}

export default App
