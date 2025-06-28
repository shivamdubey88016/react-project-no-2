import React from 'react'
import Layout from '../Components/Layout'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Banner from "../images/banner1.avif"
import "../Styles/home.css"

const Home = () => {
  return (
  <Layout>
   <div className="home" style={{backgroundImage:`url(${Banner})`}}>
    <div className="header-container">
      <h1>FOOD WEBSITE</h1>
      <p>best foood in india

      </p>
      <Link to="/menu"><button>order know</button></Link>
    </div>
   </div>
  </Layout>
  )
}

export default Home