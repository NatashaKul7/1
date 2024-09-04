import { useState } from "react";
import "./App.css";
import AddContactForm from "./components/AddContactForm";
import Contact from "./components/Contact";
import contacts from "./utility/contacts";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const removeContact = () => {};

  const addContact = () => {};

  return (
    <div className="text-md flex min-h-screen flex-col items-center bg-orange-50 px-8 pt-8 font-inter text-gray-700 sm:px-0">
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="mb-6 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:mx-auto sm:w-auto"
      >
        Add Contact
      </button>
      <div className="flex flex-row flex-wrap justify-center gap-4 lg:w-1/2 lg:justify-start">
        {contacts?.map((contact) => {
          return (
            <Contact
              contact={contact}
              key={contact.id}
              removeContact={() => removeContact(contact.id)}
            />
          );
        })}
      </div>
      <AddContactForm
        addContact={addContact}
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
