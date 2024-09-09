import React from "react";

import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, deleteContact }) => {

  return (
    <div className="item">
      <img alt="user-avatar" src={user} className="ui avatar image" />
      <div className="content">
        <Link to={`/contact/${contact.id}`}>
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
        </Link>
      </div>
      <div className="right floated content">
        <i
          className="trash alternate outline icon"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteContact(contact.id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
