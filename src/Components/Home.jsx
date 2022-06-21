import React from 'react'
import AboutSection from './About Section/AboutSection';
import OurServices from './Our Service/OurServices';
import Slider from './Slider';
const Home = () => {
  return (
    <div className='home-component container-fluid'>

      <Slider />
      <OurServices />
      <AboutSection />
      <OurServices />
    </div>
  )
}

export default Home
