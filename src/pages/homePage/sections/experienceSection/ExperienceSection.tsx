import { Fragment } from "react/jsx-runtime";
import { experienceItems } from "./experienceList/ExperienceList";
import "./experienceList/ExperienceList.css";
import "./experienceButton/ExperienceButton.css";
import OpenInstitution from "./experienceButton/ExperienceButton";

const Experience = () => {
  return (
    <div className="experienceContainer">
      <h2 className="experienceText">Experience</h2>
      <ul className="experienceList">
        {experienceItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Fragment key={item.id}>
              <li className="experienceItem">
                <Icon />
                <h2 className="experienceValue">{item.name}</h2>
                <button
                  className="button-ex"
                  onClick={OpenInstitution(item.url)}
                >
                  {item.institution}
                </button>
                <span className="experienceValue">{item.period}</span>
                <span className="experienceValue">{item.description}</span>
              </li>
              {index < experienceItems.length - 1 && (
                <hr className="separator" />
              )}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;
