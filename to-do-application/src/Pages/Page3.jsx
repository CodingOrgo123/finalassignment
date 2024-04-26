import React from 'react'
import '../Styles/Page3.css'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Footer from '../Components/Footer'
import imgs from '../images/to-do-2.png'

const Page3 = () => {
  return (
    <div className='container-fluid'>
       
        <Navbar />
        <div className="backimg">
            
        </div>
        
        <About />
        <Footer />
      
    </div>
  )
}

export default Page3
