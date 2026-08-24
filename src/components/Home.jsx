import AboutSection from "../pages/home/AboutSection"
import ContactSection from "../pages/home/ContactSection"
import Hero from "../pages/home/Hero"
import ProjectsSection from "../pages/home/ProjectsSection"
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <Hero/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  )
}

export default Home
