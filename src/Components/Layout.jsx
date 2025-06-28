import React from 'react'
import Header from './Header'
import Footer from "./footer"

const Layout = ({children}) => {
  return (
   <>
   <Header/>

   <div className="layout">
{children}
<Footer/>

   </div>
   
   </>
  )
}

export default Layout