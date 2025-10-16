import React from 'react'
import AboutUsBanner from './AboutUsBanner'
import TraditionsSection from './TraditionsSection'
import VideoBannerSection from './VideoBannerSection'
import FarmStats from '../Components/FarmStats'
import HeroContactSection from '../Components/HeroContactSection'

const Abouty = () => {
  return (
    <div>
          <AboutUsBanner /> 
          <TraditionsSection />   
          <VideoBannerSection />  
          <FarmStats />
          <HeroContactSection/>
    </div>
  )
}

export default Abouty
