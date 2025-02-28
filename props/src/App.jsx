import './App.css'
import PropsDemo from './components/PropsDemo'


function App() {

  const myObj = {
    userName: "Hariom",
    userAge: "23"
  };

  return (
    <>
     <PropsDemo user = {myObj}/>
    </>
  )
}

export default App
