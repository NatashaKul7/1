import React from "react";
import { useParams } from "react-router-dom";
import user from "../images/user.png";

const ContactDetails = ({ contacts }) => {
  const { id } = useParams();

  const contact = contacts.find((contact) => contact.id === id);

  return (
    <div className="main">
      {contact && (
        <>
          <div className="ui card centered">
            <div className="image">
              <img src={user} alt="user-avatar" />
            </div>
            <div className="content">
              <div className="header">{contact.name}</div>
              <div className="description">{contact.email}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactDetails;
