import ProjectsCarousel from "./projectsCarousel/ProjectsCarousel";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <h2 className="projectsText">Featured Projects</h2>
      <ProjectsCarousel></ProjectsCarousel>
    </div>
  );
};

export default Projects;
