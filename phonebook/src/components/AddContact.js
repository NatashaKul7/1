import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContact }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email) {
      addContact(contact);
    }
    setContact({ name: "", email: "" });
    navigate('/')

  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={handleChange}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
