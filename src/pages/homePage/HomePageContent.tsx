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
        <div className="container">
          <Presentation></Presentation>
          <Contacts></Contacts>
        </div>
        <section className="section-spacer"></section>
        <div className="container">
          <About></About>
        </div>
        <section className="section-spacer"></section>
        <div className="container">
          <Education></Education>
        </div>
        <section className="section-spacer"></section>
        <div className="container">
          <Experience></Experience>
        </div>
        <section className="section-spacer"></section>
        <div className="container">
          <Skills></Skills>
        </div>
        <section className="section-spacer"></section>
        <div className="container">
          <Interest></Interest>
        </div>
        <section className="section-spacer"></section>
        <div className="container">
          <Projects></Projects>
        </div>
        <section className="section-spacer"></section>
        <div className="container">
          <Publications></Publications>
        </div>
        <section className="section-spacer"></section>
      </div>
    </div>
  );
};

export default MainPage;
