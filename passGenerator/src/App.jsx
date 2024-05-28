import { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumallow] =useState(false)
  const [charAllow, setCharAllow] =useState(false)
  const [password, setPassword] =useState()

  //useRef Hook

  const passwordRef = useRef(null)

  
    const copytoclipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,12)
    window.navigator.clipboard.writeText(password)

  },[password])
  
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllow) str+="0123456789";

    if(charAllow) str+="!@#$%^&*()[]{}_";
    
    for(let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)      
    }
    setPassword(pass)

  },[length, numAllow, charAllow, setPassword])

  useEffect(()=>{passwordGenerator()},[length,numAllow,charAllow, passwordGenerator])
  return (
    <>
       
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500'> 
        <h1 className='text-3xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex gap-3 rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} 
          className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
          <button id="copy"  onClick={copytoclipboard}
          className='text-lg text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 px-3 py-0.5 shrink-0 ' >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={12} value={length} 
              className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
              <label className='text-lg'>Length:{length}</label>
              <input type="checkbox" defaultChecked={numAllow} id="numInput" onChange={()=>{
              setNumallow((prev)=>!prev)
              }} />
              <label className='text-lg' htmlFor='numInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllow} id="charInput" onChange={()=>{
              setCharAllow((prev)=>!prev)
              }} />
              <label className='text-lg' htmlFor='charInput'>Character</label>
          </div>
        </div>
      
      </div>

      
    </>
  )
}

export default App
