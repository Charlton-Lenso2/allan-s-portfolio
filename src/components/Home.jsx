import AboutSection from "../pages/home/AboutSection"
import Hero from "../pages/home/Hero"
import ProjectsSection from "../pages/home/ProjectsSection"
import "./Home.css"
import React from 'react'

function Home() {
  return (
    <div className="home">
      <Hero/>
      <AboutSection/>
      <ProjectsSection/>
    </div>
  )
}

export default Home
