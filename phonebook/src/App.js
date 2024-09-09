import "./App.css";
import AddContact from "./components/AddContact";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AddContact/>
      <ContactCard/>
    </div>
  );
}

export default App;
