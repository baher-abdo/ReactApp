import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layouut from './components/Layouut/Layouut'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Error404 from './Error404/Error404'





let pages = createBrowserRouter([
  {
    path: "", element: <Layouut />, children: [
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>},
    {path:"*",element:<Error404/>},
  ]}

])



function App() {
  const [count, setCount] = useState(0)

  return ( <RouterProvider router={pages}></RouterProvider>
  )
}

export default App
