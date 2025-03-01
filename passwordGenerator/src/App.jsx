import { useState , useCallback , useEffect, useRef} from 'react'
import './App.css'

function App() {

  // Variables Section
  const [length , setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // useRef Hook : kisi bhi element ka reference ka lene k liye is hook ka use kiya jata h 
  // isko 1 variable m estore knra pdta h use krne se phle
  const passwordRef = useRef(null);


  // Password generator method :-
  // useCallback() : its a react hook that lets you cache a function definition between re-render
  // Syntex : const cachedFn = useCallback(Fn, dependencies)
  // dependencies : In React, dependencies are values that determine when a hook (like useEffect, useCallback, or useMemo) should re-run or recompute its logic.
  // Intution for using useCallback() : hme password generator function ko bar bar re-run krna pd rha h on basis of Length, charAllowed, numberAllowed
  // so useCallabck 1 optimized hook jo function ko cache kr leta h jo part reuse ho skta h function ka use use kr leta or kuj new add krna ho use add kr deta h
  // useCallback memoization ka bhi kaam kr rha h

  // Or ye function ko memoize krne k liye h Optimize krne k liye h (function ko cache krne k liye)
  const passwordGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&-_+=[]*(){}`";

    for (let index = 1; index <= length; index++) {
            let charIndex = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(charIndex);
    }

    setPassword(pass);

  } , [length, numberAllowed, charAllowed, setPassword] ); // yha hm optimize ki baat kr rhe h. In dependencies me kuch bhi change ho to function ko re-run kr k memoize kro



  // ye function ko RUN krne k liye h
  // when page is load it run first time
  useEffect( () => {
   passwordGenerator();
  } , [length, numberAllowed, charAllowed, passwordGenerator] ); // inme se koi nhi dependencies me se koi bhi change to to function ko re-run kro




  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password); // password ko clipboard pr write krne k liye use kiya h
  } , [password] )



  return (
    
      <div className='w-full max-w-md mx-auto my-40 shadow-md rounded-lg px-4 py-3 bg-gray-800  text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow  rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 text-orange bg-white' placeholder='Password' readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:cursor-pointer'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input onChange={ (e) => setLength(e.target.value) } type="range" min={6} max={100} value = {length} className='cursor-pointer'/>
            <label >Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' 
                    onChange={ () => setNumberAllowed(prev => !prev) }/>
            <label>Numbers</label>
            <input type="checkbox" defaultChecked={charAllowed} id='charInput' 
                    onChange={ () => setCharAllowed(prev => !prev)  }/>
            <label>Characters</label>
          </div>

        </div>

      </div>
    
  )
}

export default App
