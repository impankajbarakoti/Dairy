import React from 'react'
import HeroSection from './HeroSection'
import Product from './Product'
import BenefitSection from './BenefitSection'
import FarmStats from './FarmStats'
import EcoImpactSection from './EcoImpactSection'
import PrinciplesSection from './PrinciplesSection'
import HeroContactSection from './HeroContactSection'
import FooterSection from './FooterSection'

const HomeMain = () => {
  return (
      <div>
          
          <HeroSection />
          <Product />
          <BenefitSection />
          <FarmStats />
          <EcoImpactSection />
          <PrinciplesSection />
          <HeroContactSection />
          
    </div>
  )
}

export default HomeMain
