import { Fragment } from "react/jsx-runtime";
import { publicationsItems } from "./publicationsList/PublicationsList";
import "./publicationsList/PublicationsList.css";
import "./publicationsButton/PublicationsButton.css";
import { FaLink } from "react-icons/fa";
import OpenPublication from "./publicationsButton/PublicationsButton";

const Publications = () => {
  return (
    <div className="publicationsContainer">
      <h2 className="publicationsText">Publications</h2>
      <ul className="publicationsList">
        {publicationsItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Fragment key={item.id}>
              <li className="publicationsItem">
                <Icon />
                <span className="publicationsValue">{item.name}</span>
                <span className="publicationsValue">{item.date}</span>
                <button
                  className="button-pub"
                  onClick={OpenPublication(item.url)}
                >
                  <span>See Publication</span>
                  <FaLink />
                </button>
              </li>
              {index < publicationsItems.length - 1 && (
                <hr className="separator" />
              )}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Publications;
