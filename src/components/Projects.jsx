import { Link } from "react-router-dom";
import "./Projects.css";
import AutoCarousel from "./AutoCarousel";

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
    title: "Nyota Travel Agency",
    category: "Digital Experience",
    year: "2024",
    images: nyotaImages,
    description:
      "A comprehensive digital experience and booking platform for a forward-thinking travel agency.",
  },
  {
    number: "02",
    title: "DM Designs",
    category: "Brand identity",
    year: "2023",
    images: dmImages,
    description:
      "A fresh and modern visual identity system that elevates the brand presence and communicates clearly.",
  },
  {
    number: "03",
    title: "Kulan Auto App",
    category: "Product Design",
    year: "2023",
    images: productDesignImages,
    description:
      "A mobile application mockup focused on seamless user flow, modern aesthetics, and conversion optimization.",
  },
  {
    number: "04",
    title: "Golden Visuals",
    category: "Personal Project",
    year: "2022",
    images: personalImages,
    description:
      "A personal exploration into visual design, typography, and creative compositions.",
  },
];

function Projects() {
  return (
    <main className="projectsPage">
      <header className="projectsPageIntro">
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
      <section className="projectsArchive" aria-label="Project archive">
        {work.map((project) => (
          <article className="archiveCard" key={project.number}>
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
            </div>
          </article>
        ))}
      </section>
      <section className="projectsEnd">
        <p>Like the direction of this work?</p>
        <Link to="/contact">
          Let’s build something together <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}

export default Projects;
