import "../EducationSection.css";

type Props = {
  sectionTitle: string;
  sectionText: string;
};

const EducationContainer = (props: Props) => {
  return (
    <div className="educationContainer">
      <h2 className="educationText">{props.sectionTitle}</h2>
      <p className="educationText">{props.sectionText}</p>
    </div>
  );
};

export default EducationContainer;
