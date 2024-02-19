import { useState } from "react"


function App() {
  const [color, setColor]= useState("olive")
  return (
  
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("red")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{background:"red"}}>Red</button>
        <button onClick={() => setColor("Green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{background:"green"}}>Green</button>
        <button onClick={() => setColor("Blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{background:"blue"}}>Blue</button>
        <button onClick={() => setColor("orange")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{ background: "orange" }}>Orange</button>
        <button onClick={() => setColor("Black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{ background: "Black" }}>Black</button>
        <button onClick={() => setColor("purple")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{ background: "purple" }}>Purple</button>
        <button onClick={() => setColor("Cyan")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{ background: "Cyan" }}>Cyan</button>
        <button onClick={() => setColor("white")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{ background: "white", color: "black" }}>White</button>
        <button onClick={() => setColor("lavender")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{ background: "lavender", color: "black" }}>Lavender</button>

      </div>
    </div>
     </div>
  )
}

export default App
