import React from 'react'
import HeroBanner from '../components/LandingPage/HeroBanner'
import ToolsTechnologies from '../components/LandingPage/ToolsTechnologies'
import WorkExperience from '../components/LandingPage/WorkExperience'
import Goals from '../components/LandingPage/Goals'

function LandingPage(props) {


  return (
    <div className='LandingPage-Container'>
      <HeroBanner></HeroBanner>
      <Goals></Goals>
      <WorkExperience></WorkExperience>
      <ToolsTechnologies></ToolsTechnologies>
    </div>
  )
}


export default LandingPage
