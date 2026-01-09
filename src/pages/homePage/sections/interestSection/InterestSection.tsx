import { Fragment } from "react/jsx-runtime";
import { interestItems } from "./interestList/InterestList";
import "./InterestSection.css";
import "./interestList/InterestList.css";

const Interest = () => {
  return (
    <div className="interestContainer">
      <h2 className="interestText">Areas Of Interest</h2>
      <ul className="interestList">
        {interestItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Fragment key={item.id}>
              <li className="interestItem">
                <Icon />
                <span className="interestValue">{item.name}</span>
              </li>
              {index < interestItems.length - 1 && <hr className="separator" />}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Interest;
