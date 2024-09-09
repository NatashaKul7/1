import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to="/add">
        <button className="ui button blue right">Add Contact</button>
      </Link>
      <div className="ui celled list">
        {contacts &&
          contacts.map((contact) => (
            <ContactCard
              contact={contact}
              key={contact.id}
              deleteContact={deleteContact}
            />
          ))}
      </div>
    </div>
  );
};

export default ContactList;
