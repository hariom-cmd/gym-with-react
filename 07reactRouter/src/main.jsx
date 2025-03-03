import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider , Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/Aboout/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'



// two ways to make router 

// First way : isme createBrowserRouter ( [{}] ); 1 array as an argument lega uske andr hm objects pass kr skte h
// const router = createBrowserRouter( [
//   {
//     path : '/',
//     element : <Layout/>, // ye 2 path and element to mandatory h but hm or child components bhi daal skte h for nested routing k liye 
//     children : [ // same yha bhi chlidren k andr array of objects pass krenge us sab pages k jinko hme routing krni h
//       {
//         path : '',
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         path : "contact",
//         element : <Contact/>
//       }
//     ]
//   }
// ] )



// Second way :- By createRoutesFromElements

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}> {/* Top level pr layout diye h or iske andr hm apne Outlets rkh skte h (Home,About,Contact,User,Github) all are oulets */}
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>  {/* jo bhi value hm send kr rhe h uska direct access milta h us component k andr. Its called dynamically capturing data */}
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>   {/** React router hme addtional features bhi provide krata h jese Loader. Loader phle hi sara data fetch kr k rkh leta h page load hone se bhi phle ye useEffect se bhi fast h Example : jese hi hm github vale component k upr hover krte h vo tbhi API call kr k data fetch kr lega or use cache kr lega jese hi hm us pr click krenge h hmara data instanatly reflect ho jayega */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>  {/* isko 1 prop dena pdta nhi to ye kaan nhi krta. Prop me router pass kiya h isko bnana bhi pdega */}
  </StrictMode>,
)
