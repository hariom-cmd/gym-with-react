
import { useState } from 'react'
import './App.css'

function App() {

  const [color , setColor] = useState("olive");

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor("red") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}} >Red</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor("yellow") } className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "yellow"}} >yellow</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor("purple") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "purple"}} >purple</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor("orange") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "orange"}} >orange</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor("blue") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}} >blue</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor("grey") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "grey"}} >grey</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor("white") } className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "white"}} >white</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor("hotpink") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "hotpink"}} >hotpink</button>
      </div>
    </div>

   </div>
  )
}

export default App
