import React from "react";
import "./ProjectsSection.css";

function ProjectsSection() {
  const skills = [
    "Product Designing",
    "Canva",
    "Figma",
    "PhotoShop",
    "Adobe Illustrator",
    "Print Designing",
    "Branding",
    "Design Thinking",
    "Ui Designing",
    "Graphic Designing",
    "HTML",
    "Raw CSS",
    "Basic Digital Marketing",
  ];

  return (
    <div className="projsec">
      <div className="toolkitSection">
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
    </div>
  );
}

export default ProjectsSection;
