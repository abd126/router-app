import React from 'react'
import AboutSection from './About Section/AboutSection';
import ServiceCard from './Our Service/ServiceCard';
import Slider from './Slider';
const Home = () => {
  return (
    <div className='home-component'>

      <Slider />
  
      <ServiceCard />
      {/* <AboutSection /> */}
      {/* <OurServices /> */}
    </div>
  )
}

export default Home
