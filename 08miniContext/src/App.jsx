import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider> {/* Ab iske andr jo bhi componnets honge unke andr hme direct Context ka Access milega */}
        <h1>Context API</h1>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default App
