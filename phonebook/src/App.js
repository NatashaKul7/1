import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Layout from "./Layout";
import ContactDetails from "./components/ContactDetails";

uuidv4();

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const retrivedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (retrivedContacts) {
      setContacts(retrivedContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ContactList contacts={contacts} deleteContact={deleteContact} />
          ),
        },
        {
          path: "/add",
          element: <AddContact addContact={addContact} />,
        },
        {
          path: "/contact/:id", 
          element: <ContactDetails contacts={contacts} />,
        },
      ],
    },
  ]);

  return (
    <div className="ui container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
