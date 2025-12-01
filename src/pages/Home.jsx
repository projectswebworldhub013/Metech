import React from 'react'
import HeroSlider from '../components/HeroSection'
import WhyChooseUs from "../components/WhyChooseUs"
import WhyMeTech from '../components/WhyMeTech'
import PremiumMarquee from '../components/PremiumMarquee'
import FAQSection from '../components/Frequently'
import PricingReplica from '../components/PriceSection'
import ServicesSection from '../components/ServiceSection'
import FeaturedSection from '../components/FeaturedSection'
import MeTechProducts from '../components/Product'
import WeSecureBadge from '../components/Badge'
const Home = () => {
  return (
    <>
  <HeroSlider/>
  <WhyChooseUs/>
  <PremiumMarquee/>
  <WhyMeTech/>
  <ServicesSection/>
  <PricingReplica/>
  <FeaturedSection/>
  <MeTechProducts/>
   <PremiumMarquee/>
  <FAQSection/>
  <WeSecureBadge/>
    </>
  )
}

export default Home