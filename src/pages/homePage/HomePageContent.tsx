import Presentation from "./sections/presentationSection/PresentationSection";
import About from "./sections/aboutSection/AboutSection";
import Education from "./sections/educationSection/EducationSection";
import Experience from "./sections/experienceSection/ExperienceSection";
import Skills from "./sections/skillsSection/SkillsSection";
import Interest from "./sections/interestSection/InterestSection";
import Projects from "./sections/projectsSection/ProjectsSection";
import Publications from "./sections/publicationsSection/PublicationsSection";
import Contacts from "./sections/contactsSection/ContactsSection";
import { Toolbar } from "@mui/material";
import "./HomePageContent.css";
import PortfolioAppBar from "./appBar/AppBar";
import PortfolioBottomBar from "./bottomBar/BottomBar";

const MainPage = () => {
  return (
    <div className="page">
      <PortfolioAppBar />
      <Toolbar />
      <div className="page-content">
        <div className="container" id="presentation">
          <Presentation />
          <Contacts />
        </div>

        <section className="section-spacer" />
        <div
          className="container"
          id="about
        "
        >
          <About />
        </div>

        <section className="section-spacer" />
        <div className="container" id="education">
          <Education />
        </div>

        <section className="section-spacer" />
        <div className="container" id="experience">
          <Experience />
        </div>

        <section className="section-spacer" />
        <div className="container" id="skills">
          <Skills />
        </div>

        <section className="section-spacer" />
        <div className="container" id="interest">
          <Interest />
        </div>

        <section className="section-spacer" />
        <div className="container" id="publications">
          <Publications />
        </div>

        <section className="section-spacer" />
        <div className="container" id="projects">
          <Projects />
        </div>
      </div>

      <section className="section-spacer" />

      <PortfolioBottomBar
        githubUrl="https://github.com/Rancid-coder"
        linkedinUrl="https://pt.linkedin.com/in/manuel-patr%C3%ADcio-7b74742a1"
      />
    </div>
  );
};

export default MainPage;
