import React from 'react';
import { Routes , Route } from "react-router-dom"; 
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact'
import Service from '../Components/Service'


const appRouter = () => {
  return (
    <div>
      
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='*' element={<h1>404 Page Not Found</h1>} />

    </Routes>

    </div>
  )
}

export default appRouter


