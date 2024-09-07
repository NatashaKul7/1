import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import { context } from "./content/AuthContext";

function App() {
  const [nameData, setNameData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("");
  const [assignment, setAssignment] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const names = await axios.get(
        "https://api.slingacademy.com/v1/sample-data/files/employees.json"
      );
      setNameData(names.data);
      setLoading(false);
    } catch (error) {
      console.error("Error loading name data", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <context.Provider
        value={{
          nameData,
          setNameData,
          loading,
          setLoading,
          query,
          setQuery,
          department,
          assignment,
          setAssignment,
          setDepartment,
          position,
          setPosition,
        }}
      >
        <Header />
      </context.Provider>
    </div>
  );
}

export default App;
