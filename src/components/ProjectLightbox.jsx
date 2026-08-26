import { useEffect, useRef } from "react";
import "./ProjectLightbox.css";

function ProjectLightbox({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="lightboxOverlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
      onClick={onClose}
    >
      <div
        className="lightboxPanel"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="lightboxHeader">
          <div>
            <p className="lightboxMeta">
              {project.category} · {project.year}
            </p>
            <h2>{project.title}</h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="lightboxClose"
            onClick={onClose}
            aria-label="Close gallery"
          >
            ✕
          </button>
        </header>
        <div className="lightboxGallery">
          {project.images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`${project.title} visual ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectLightbox;