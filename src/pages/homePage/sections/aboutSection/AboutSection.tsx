import OpenCV from "./cvButton/CVButton";
import "./cvButton/CVButton.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <h2 className="aboutText">About Me</h2>
      <p className="aboutText">
        Master’s graduate in Informatics (June 2025) from the Polytechnic
        University of Bragança Bragança (IPB), with a background in Informatics
        Engineering and hands-on experience developing web, mobile, and wearable
        applications at Balvia Ecosystems. Contributed to research and academic
        initiatives, including a scholarship project that led to a CLF 2024
        presentation and a published article. Completed additional training in
        enterprise development (SAP ABAP) and hold the OutSystems Associate
        Reactive Developer certification. Focused on reliable and structured
        problem-solving, with an ongoing commitment to strengthening my skills
        across IT domains, including database systems, backend architectures,
        and AI-enabled solutions.
      </p>
      <button className="button-CV" onClick={OpenCV("cv/cv.pdf")}>
        Read My CV
      </button>
    </div>
  );
};

export default About;
