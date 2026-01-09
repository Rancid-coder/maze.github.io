import { contactItems } from "./ContactsList/ContactsList";
import "./ContactsList/ContactsList.css";
import { Fragment } from "react";

const Contacts = () => {
  return (
    <div className="contactsContainer">
      <ul className="contactList">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Fragment key={item.id}>
              <li className="contactItem">
                <Icon />
                <span className="contactValue">{item.value}</span>
              </li>
              {index < contactItems.length - 1 && <hr className="separator" />}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
