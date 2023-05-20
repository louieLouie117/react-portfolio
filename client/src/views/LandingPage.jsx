import React from 'react'
import HeroBanner from '../components/LandingPage/HeroBanner'
import ToolsTechnologies from '../components/LandingPage/ToolsTechnologies'
import WorkExperience from '../components/LandingPage/WorkExperience'
// import Goals from '../components/LandingPage/Goals'
import LandingPageStyles from '../modules/LandingPageStyles.css'
// import AboutMe from '../components/LandingPage/AboutMe'

function LandingPage(props) {

  <LandingPageStyles></LandingPageStyles>


  return (
    <div className='LandingPage-Container'>
      <HeroBanner></HeroBanner>

      {/* <Goals></Goals> */}
      <div>
      <WorkExperience></WorkExperience>
      <ToolsTechnologies></ToolsTechnologies>
      </div>
      {/* <AboutMe></AboutMe> */}
    </div>
  )
}


export default LandingPage
