import { useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { projectsItems } from "../projectsList/ProjectsList";
import { useSwipeable } from "react-swipeable";
import "./ProjectsCarousel.css";

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setTransitioning = (callback: () => void) => {
    setIsTransitioning(true);
    callback();
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setTransitioning(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? projectsItems.length - 1 : prev - 1
      );
    });
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setTransitioning(() => {
      setCurrentIndex((prev) =>
        prev === projectsItems.length - 1 ? 0 : prev + 1
      );
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventScrollOnSwipe: true,
    delta: 50,
  });

  const currentProject = projectsItems[currentIndex];

  return (
    <div className="carousel-container" {...handlers}>
      <div className="carousel-wrapper">
        <div className="carousel-header"></div>

        <div className="carousel-main">
          <div
            className={`carousel-card ${
              isTransitioning ? "transitioning" : ""
            }`}
          >
            <div className="carousel-content">
              <div className="carousel-image-section">
                <div className="carousel-image-wrapper">
                  <img
                    src={currentProject.image}
                    alt={currentProject.name}
                    className="carousel-image"
                  />
                  <div className="carousel-image-overlay" />
                </div>
              </div>

              <div className="carousel-text-section">
                <h3 className="carousel-project-title">
                  {currentProject.name}
                </h3>
                <div className="carousel-institution-wrapper">
                  <span className="carousel-dot-indicator" />
                  <p className="carousel-institution">
                    {currentProject.institution}
                  </p>
                </div>
                <p className="carousel-period">{currentProject.period}</p>
                <p className="carousel-description">
                  {currentProject.description}
                </p>
                {currentProject.url != "" ? (
                  <a href={currentProject.url} className="carousel-link">
                    View Project <span className="carousel-link-arrow">→</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="carousel-nav-button prev"
            aria-label="Previous project"
          >
            <ChevronLeft className="carousel-nav-icon" />
          </button>

          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="carousel-nav-button next"
            aria-label="Next project"
          >
            <ChevronRight className="carousel-nav-icon" />
          </button>
        </div>

        <div className="carousel-indicators">
          {projectsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 300);
                }
              }}
              className={`carousel-dot ${
                index === currentIndex ? "active" : "inactive"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
