import { contactItems } from "./ContactsList/ContactsList";
import "./ContactsList/ContactsList.css";

const Contacts = () => {
  return (
    <div className="contactsContainer">
      <ul className="contactList">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <>
              <li key={index} className="contactItem">
                <Icon />
                <span className="contactValue">{item.value}</span>
              </li>
              {index < contactItems.length - 1 && <hr className="separator" />}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
