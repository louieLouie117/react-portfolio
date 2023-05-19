import React from 'react'
import HeroBanner from '../components/LandingPage/HeroBanner'
import ToolsTechnologies from '../components/LandingPage/ToolsTechnologies'
import WorkExperience from '../components/LandingPage/WorkExperience'
import Goals from '../components/LandingPage/Goals'
import LandingPageStyles from '../modules/LandingPageStyles.css'
// import AboutMe from '../components/LandingPage/AboutMe'

function LandingPage(props) {

  <LandingPageStyles></LandingPageStyles>


  return (
    <div className='LandingPage-Container'>
      {/* <Goals></Goals> */}
      <WorkExperience></WorkExperience>
      <HeroBanner></HeroBanner>

      <ToolsTechnologies></ToolsTechnologies>
      {/* <AboutMe></AboutMe> */}
    </div>
  )
}


export default LandingPage
