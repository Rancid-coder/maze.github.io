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

const MainPage = () => {
  return (
    <div className="page">
      <div className="page-content">
        <br />
        <Presentation></Presentation>
        <hr />
        <div className="container">
          <About></About>
        </div>
        <hr />
        <div className="container">
          <Education></Education>
        </div>
        <hr />
        <Experience></Experience>
        <hr />
        <Skills></Skills>
        <hr />
        <Interest></Interest>
        <hr />
        <Projects></Projects>
        <hr />
        <Publications></Publications>
        <hr />
        <Contacts></Contacts>
        <hr />
      </div>
    </div>
  );
};

export default MainPage;
