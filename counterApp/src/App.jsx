
import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    if(counter <= 0){
      setCounter(0);
    }else{
      setCounter(counter - 1);
    }
  }

  const increment = () => {
    // setCounter(counter + 1);  Agr ese 4 baer same likhne se apko lg rha k 4 bar set conter chlega to wrong soch rhe ho
    // setCounter(counter + 1);  background me react fiber isko 1 hi kaam samjhega kyoki se sare same kaam h to fiber inka 1 batch bna k bhejega or 1 hi baar value update hogi kyoki ye 1 hi kama h   
    // setCounter(counter + 1);  isko over come krne k liye hme setCounter Function me by default 1 callBack milta h jis se hm previous value ko lenge or usme update krenge 
    // setCounter(counter + 1);  jis se fiber ko vo same kaam nhi lgega kyoki hm hr baar previous value me update kr rhe h

    setCounter( prevCount => prevCount + 1 ); // ab ye same kaam nhi rhe ab direct 4 bar value update hogi
    setCounter( prevCount => prevCount + 1 );
    setCounter( (prevCount) => prevCount + 1 );
    setCounter( (prevCount) => prevCount + 1 );
  }

  return (
    <>
       <h1 class="text-3xl font-bold underline mb-10">My counter App</h1>
      <button onClick={decrement}>-</button>
      <input className='bg-amber-200 text-black text-center' type="text" value = {counter}/>
      <button onClick={increment}>+</button>
    </>
  )
}

export default App
