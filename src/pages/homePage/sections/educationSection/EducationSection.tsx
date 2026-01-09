import { Fragment } from "react";
import { educationItems } from "./educationList/EducationList";
import "./educationList/EducationList.css";
import "./educationButton/EducationButton.css";
import OpenCertificates from "./educationButton/EducationButtonCertificates";
import OpenInstitute from "./educationButton/EducationButtonInstitute";

const Education = () => {
  return (
    <div className="educationContainer">
      <h2 className="educationText">Certificates & Grants</h2>
      <ul className="educationList">
        {educationItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Fragment key={item.id}>
              <li className="educationItem">
                <Icon />
                <button
                  className="button"
                  onClick={() => {
                    if (item.isInstitute) {
                      OpenInstitute(item.url)(); 
                    } else {
                      OpenCertificates(item.url)(); 
                    }
                  }}
                >
                  {item.name}
                </button>

                <span className="educationValue">{item.institution}</span>
                <span className="educationValue">{item.year}</span>
              </li>
              {index < educationItems.length - 1 && (
                <hr className="separator" />
              )}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Education;
