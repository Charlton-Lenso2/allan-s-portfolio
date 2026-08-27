import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import AutoCarousel from "./AutoCarousel";
import ProjectLightbox from "./ProjectLightbox";
import useReveal from "../hooks/useReveal";

const nyotaImages = Object.values(
  import.meta.glob(
    "../assets/port assets/Nyota travel agency/*.{png,jpg,jpeg,webp}",
    { eager: true, import: "default" },
  ),
);
const dmImages = Object.values(
  import.meta.glob("../assets/port assets/DM designs/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
);
const productDesignImages = Object.values(
  import.meta.glob(
    "../assets/port assets/product design crash course/*.{png,jpg,jpeg,webp}",
    { eager: true, import: "default" },
  ),
);
const personalImages = Object.values(
  import.meta.glob("../assets/port assets/personal/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
);

const work = [
  {
    number: "01",
    title: "Branding",
    category: "Digital Experience",
    year: "2026",
    images: nyotaImages,
    description:
      "A comprehensive digital experience and booking platform for a forward-thinking travel agency.",
  },
  {
    number: "02",
    title: "Digital Marketing Designs",
    category: "Brand identity",
    year: "2026",
    images: dmImages,
    description:
      "A fresh and modern visual identity system that elevates the brand presence and communicates clearly.",
  },
  {
    number: "03",
    title: "Kulan Auto App",
    category: "Product Design",
    year: "2026",
    images: productDesignImages,
    description:
      "A mobile application mockup focused on seamless user flow, modern aesthetics, and conversion optimization.",
  },
  {
    number: "04",
    title: "Personal Projects",
    category: "Personal Project",
    year: "2026",
    images: personalImages,
    description:
      "A personal exploration into visual design, typography, and creative compositions.",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const pressPoint = useRef(null);
  const introRef = useReveal();
  const archiveRef = useReveal();
  const endRef = useReveal();

  const handlePressStart = (event) => {
    pressPoint.current = { x: event.clientX, y: event.clientY };
  };

  const openProject = (project, event) => {
    const press = pressPoint.current;
    pressPoint.current = null;
    if (
      press &&
      event &&
      typeof event.clientX === "number" &&
      Math.hypot(event.clientX - press.x, event.clientY - press.y) > 12
    ) {
      return;
    }
    setActiveProject(project);
  };

  return (
    <main className="projectsPage">
      <header className="projectsPageIntro reveal" ref={introRef}>
        <p className="projectsPageEyebrow">Selected work</p>
        <h1>
          Projects with
          <br />
          purpose.
        </h1>
        <p>
          A growing collection of considered work across branding, digital
          design, and visual communication.
        </p>
      </header>
      <section
        className="projectsArchive reveal"
        ref={archiveRef}
        aria-label="Project archive"
      >
        {work.map((project) => (
          <article
            className="archiveCard"
            key={project.number}
            onPointerDown={handlePressStart}
            onClick={(event) => openProject(project, event)}
          >
            <div className="archiveImage">
              <AutoCarousel
                images={project.images}
                className="projectCarousel"
                imageClassName="projectImage"
              />
              <span>{project.number}</span>
            </div>
            <div className="archiveDetails">
              <p>
                {project.category} · {project.year}
              </p>
              <h2>{project.title}</h2>
              <p className="archiveDescription">{project.description}</p>
              <button
                type="button"
                className="archiveOpen"
                onClick={() => setActiveProject(project)}
              >
                View gallery <span aria-hidden="true">↗</span>
              </button>
            </div>
          </article>
        ))}
      </section>
      {activeProject && (
        <ProjectLightbox
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
      <section className="projectsEnd reveal" ref={endRef}>
        <p>Like the direction of this work?</p>
        <Link to="/contact">
          Let’s build something together <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}

export default Projects;
