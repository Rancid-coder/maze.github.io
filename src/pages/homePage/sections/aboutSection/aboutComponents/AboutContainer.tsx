import "../AboutSection.css";

type Props = {
  sectionTitle: string;
  sectionText: string;
};

const AboutContainer = (props: Props) => {
  return (
    <div className="aboutContainer">
      <h2 className="aboutText">{props.sectionTitle}</h2>
      <p className="aboutText">{props.sectionText}</p>
    </div>
  );
};

export default AboutContainer;
