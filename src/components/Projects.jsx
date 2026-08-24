import { Link } from "react-router-dom";
import "./Projects.css";

const work = [
  { number: "01", title: "Form & Function", category: "Product design", year: "2025", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85", description: "A focused digital product concept that brings clarity to everyday decisions." },
  { number: "02", title: "Morrow Studio", category: "Brand identity", year: "2024", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=85", description: "An expressive identity system for a young studio with a confident voice." },
  { number: "03", title: "Off Grid", category: "Editorial design", year: "2024", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85", description: "A visual direction that turns independent travel stories into collectible reading." },
  { number: "04", title: "Common Ground", category: "Campaign design", year: "2023", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85", description: "A clear, optimistic campaign built to help a community come together." },
];

function Projects() {
  return (
    <main className="projectsPage">
      <header className="projectsPageIntro">
        <p className="projectsPageEyebrow">Selected work</p>
        <h1>Projects with<br />purpose.</h1>
        <p>A growing collection of considered work across branding, digital design, and visual communication.</p>
      </header>
      <section className="projectsArchive" aria-label="Project archive">
        {work.map((project) => (
          <article className="archiveCard" key={project.number}>
            <div className="archiveImage"><img src={project.image} alt="" /><span>{project.number}</span></div>
            <div className="archiveDetails">
              <p>{project.category} · {project.year}</p>
              <h2>{project.title}</h2>
              <p className="archiveDescription">{project.description}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="projectsEnd">
        <p>Like the direction of this work?</p>
        <Link to="/contact">Let’s build something together <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}

export default Projects;
