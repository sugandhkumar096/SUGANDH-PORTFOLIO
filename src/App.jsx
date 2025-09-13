import React from 'react'
import Navbar from './main/navbar/Navbar'
import Header from "./main/header/Header"
import About from './main/about/About'
import Resume from './main/resume/Resume'
import Service from './main/services/Service'
import Service1 from './main/services/Service1'
import Contact from './main/footer/Contact'
import WorkProcess from './main/services/WorkProcess'

function App() {
  

  return (
    <>
    <Navbar/>  
    <Header/>  
    <About/>
    <Resume/>
    <Service/>
    <Service1/>
    <WorkProcess/>
    <Contact/> 

        
    </>
  )
}

export default App