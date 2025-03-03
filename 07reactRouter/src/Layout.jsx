import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' 


// Ye sara kaam app.jsx k andr direct bhi kiya ja skta h
// hmne 1 layout bna diya jisme header,footer sare pages me same rhega bs beech ka content change hota rhega
function Layout() {
  return (
    <>
        <Header/>
        <Outlet/> {/* Beech ka content jo change ho rha h vo sab ye outlet handle kr rha h. And react-router-dom allows us to nesting the routes */}
        <Footer/>
    </>
  )
}

export default Layout