import "../ContactsSection.css";

type Props = {
  sectionTitle: string;
  sectionText: string;
};

const ContactsContainer = (props: Props) => {
  return (
    <div className="contactsContainer">
      <h2 className="contactsText">{props.sectionTitle}</h2>
      <p className="contactsText">{props.sectionText}</p>
    </div>
  );
};

export default ContactsContainer;
