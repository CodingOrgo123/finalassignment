import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import About from '../Components/About'
import Task1 from '../Components/Task1'
import Contactus from '../Components/Contact'
import Footer from '../Components/Footer'

const Page1 = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Task1 />
        <Contactus />
        <Footer />
      
    </div>
  )
}

export default Page1
