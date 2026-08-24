import { Link } from "react-router-dom";
import "./ProjectsSection.css";

const projects = [
  { number: "01", title: "Form & Function", type: "Product design · 2025", description: "A thoughtful digital experience built around clarity, character, and the everyday moments that matter.", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85" },
  { number: "02", title: "Morrow Studio", type: "Brand identity · 2024", description: "An expressive identity system designed to make a new creative studio feel established from day one.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85" },
  { number: "03", title: "Off Grid", type: "Editorial · 2024", description: "A tactile, image-led visual direction for stories about travel, culture, and getting wonderfully lost.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85" },
];

function ProjectsSection() {
  const skills = ["Product Design", "Canva", "Figma", "Photoshop", "Adobe Illustrator", "Print Design", "Branding", "UI Design", "Graphic Design", "Digital Marketing"];

  return (
    <section className="projsec" aria-labelledby="projects-title">
      <div className="projectsIntro">
        <div>
          <p className="sectionEyebrow">Selected work</p>
          <h2 id="projects-title">Selected<br />projects.</h2>
        </div>
        <p className="projectsLead">A small collection of brands, interfaces, and visual stories made with intention.</p>
      </div>

      <div className="projectGrid">
        {projects.map((project) => (
          <article className="projectCard" key={project.number}>
            <div className="projectImageWrap">
              <img src={project.image} alt="" className="projectImage" />
              <span className="projectNumber">{project.number}</span>
              <span className="projectView">View project <span aria-hidden="true">↗</span></span>
            </div>
            <div className="projectDetails">
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <p className="projectDescription">{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="projectsFooter">
        <p>More curious things in the works.</p>
        <Link className="allProjectsLink" to="/projects">View all projects <span aria-hidden="true">↗</span></Link>
      </div>

      <div className="toolkitSection">
        <p className="toolkitLabel">Toolkit</p>
        <div className="toolkitMarqueeWrapper"><div className="toolkitTrack">
          {[...skills, ...skills].map((skill, i) => <span key={`${skill}-${i}`} className="toolkitItem">{skill}</span>)}
        </div></div>
      </div>
    </section>
  );
}

export default ProjectsSection;
