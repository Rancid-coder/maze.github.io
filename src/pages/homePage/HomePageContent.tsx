import Presentation from "./sections/presentationSection/PresentationSection";
import About from "./sections/aboutSection/AboutSection";
import Education from "./sections/educationSection/EducationSection";
import Experience from "./sections/experienceSection/ExperienceSection";
import Skills from "./sections/skillsSection/SkillsSection";
import Interest from "./sections/interestSection/InterestSection";
import Projects from "./sections/projectsSection/ProjectsSection";
import Publications from "./sections/publicationsSection/PublicationsSection";
import Contacts from "./sections/contactsSection/ContactsSection";
import "./HomePageContent.css";
import PortfolioAppBar from "./sections/appBar/AppBar";
import { Toolbar } from "@mui/material";

const MainPage = () => {
  return (
    <div className="page">
      <PortfolioAppBar></PortfolioAppBar>
      <Toolbar />
      <div className="page-content">
        <div className="container" id="presentation">
          <Presentation></Presentation>
          <Contacts></Contacts>
        </div>
        <section className="section-spacer"></section>
        <div className="container" id="about">
          <About></About>
        </div>
        <section className="section-spacer"></section>
        <div className="container" id="education">
          <Education></Education>
        </div>
        <section className="section-spacer"></section>
        <div className="container" id="experience">
          <Experience></Experience>
        </div>
        <section className="section-spacer"></section>
        <div className="container" id="skills">
          <Skills></Skills>
        </div>
        <section className="section-spacer"></section>
        <div className="container" id="interest">
          <Interest></Interest>
        </div>
        <section className="section-spacer"></section>
        <div className="container" id="publications">
          <Publications></Publications>
        </div>
        <section className="section-spacer"></section>
        <div className="container" id="projects">
          <Projects></Projects>
        </div>
        <section className="section-spacer"></section>
      </div>
    </div>
  );
};

export default MainPage;
