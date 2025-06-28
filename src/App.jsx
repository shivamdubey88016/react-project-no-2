import { useState } from 'react'
import Layout from './Components/Layout'
import './App.css'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

import Menu from "./Pages/Menu"
import Page from "./Pages/Pagenotfound"



function App() {
  
  return (
    <>

   
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Contact" element={<Contact/>}/>
     <Route path="/Menu" element={<Menu/>}/>
     <Route path="*" element={<Page/>}/>
   </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
