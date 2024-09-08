import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3030/users/").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  function handleSubmit(id) {
    const conf = window.confirm("Do you want to delete?");
    if (conf) {
      axios
        .delete("http://localhost:3030/users/" + id)
        .then((res) => {
          alert("Record had deleted successfully");
          setRecords(records.filter(record => record.id !== id ))
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="container mt-5">
      <div className="text-end">
        <Link to="/create" className="btn btn-primary">
          Add +
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <Link to={`/update/${r.id}`} className="btn btn-sm btn-success">
                Update
              </Link>
              <button
                onClick={(e) => {
                  handleSubmit(r.id);
                }}
                className="btn btn-sm ms-1 btn-danger"
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
