import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProjectsSection.css";
import AutoCarousel from "../../components/AutoCarousel";
import useReveal from "../../hooks/useReveal";

const nyotaImages = Object.values(
  import.meta.glob(
    "../../assets/port assets/Nyota travel agency/*.{png,jpg,jpeg,webp}",
    { eager: true, import: "default" },
  ),
);
const dmImages = Object.values(
  import.meta.glob(
    "../../assets/port assets/DM designs/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
      import: "default",
    },
  ),
);
const productDesignImages = Object.values(
  import.meta.glob(
    "../../assets/port assets/product design crash course/*.{png,jpg,jpeg,webp}",
    { eager: true, import: "default" },
  ),
);

const projects = [
  {
    number: "01",
    title: "Nyota Travel Agency",
    type: "Digital Experience",
    description:
      "A comprehensive digital experience and booking platform for a forward-thinking travel agency.",
    images: nyotaImages,
  },
  {
    number: "02",
    title: "DM Designs",
    type: "Brand identity",
    description:
      "A fresh and modern visual identity system that elevates the brand presence and communicates clearly.",
    images: dmImages,
  },
  {
    number: "03",
    title: "Kulan Auto App",
    type: "Product Design",
    description:
      "A mobile application mockup focused on seamless user flow, modern aesthetics, and conversion optimization.",
    images: productDesignImages,
  },
];

function ProjectsSection() {
  const navigate = useNavigate();
  const pressPoint = useRef(null);
  const introRef = useReveal();
  const gridRef = useReveal();
  const footerRef = useReveal();
  const toolkitRef = useReveal();

  const handlePressStart = (event) => {
    pressPoint.current = { x: event.clientX, y: event.clientY };
  };

  const handleCardTap = (event) => {
    const press = pressPoint.current;
    pressPoint.current = null;
    if (!press || event.clientX == null) return;
    const moved = Math.hypot(event.clientX - press.x, event.clientY - press.y);
    if (moved > 12) return;
    navigate("/projects");
  };

  const skills = [
    "Product Design",
    "Canva",
    "Figma",
    "Photoshop",
    "Adobe Illustrator",
    "Print Design",
    "Branding",
    "UI Design",
    "Graphic Design",
    "Digital Marketing",
  ];

  return (
    <section className="projsec" aria-labelledby="projects-title">
      <div className="projectsIntro reveal" ref={introRef}>
        <div>
          <p className="sectionEyebrow">Selected work</p>
          <h2 id="projects-title">
            Selected
            <br />
            projects.
          </h2>
        </div>
        <p className="projectsLead">
          A small collection of brands, interfaces, and visual stories made with
          intention.
        </p>
      </div>

      <div className="projectGrid reveal" ref={gridRef}>
        {projects.map((project) => (
          <article
            className="projectCard"
            key={project.number}
            onPointerDown={handlePressStart}
            onClick={handleCardTap}
          >
            <div className="projectImageWrap">
              <AutoCarousel
                images={project.images}
                className="projectCarousel"
                imageClassName="projectImage"
              />
              <span className="projectNumber">{project.number}</span>
              <Link className="projectView" to="/projects">
                View project <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="projectDetails">
              <p>{project.type}</p>
              <h3>
                <Link className="projectTitleLink" to="/projects">
                  {project.title}
                </Link>
              </h3>
              <p className="projectDescription">{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="projectsFooter reveal" ref={footerRef}>
        <p>More curious things in the works.</p>
        <Link className="allProjectsLink" to="/projects">
          View all projects <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="toolkitSection reveal" ref={toolkitRef}>
        <p className="toolkitLabel">Toolkit</p>
        <div className="toolkitMarqueeWrapper">
          <div className="toolkitTrack">
            {[...skills, ...skills].map((skill, i) => (
              <span key={`${skill}-${i}`} className="toolkitItem">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
