import React from 'react'
import AboutSection from './About Section/AboutSection';
import Carousel from './Carousel/Carousel';
import CountUpSec from './Countup Section/CountUpSec';
import Map from './Map Section/Map';
import ServiceCard from './Our Service/ServiceCard';
const Home = () => {
  return (
    <div className='home-component'>

      <Carousel />
      <ServiceCard />
      <CountUpSec />
      <AboutSection />
      <Map />
    </div>
  )
}

export default Home
