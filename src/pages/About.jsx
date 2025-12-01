import React from 'react'
import HeroAbout from '../components/HeroAbout'
import Testimonials from "../components/Testimonial"
import VisionMission from '../components/VisionMission'
import WeSecureBadge from '../components/Badge'
import PartnersMarquee from '../components/PartnersMarquee'

const About = () => {
  return (
    <>
    <HeroAbout/>
    <VisionMission/>
    <PartnersMarquee/>
    <Testimonials/>
    <WeSecureBadge/>
    </>
  )
}

export default About