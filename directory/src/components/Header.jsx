import React, { useContext } from "react";
import { context } from "../content/AuthContext";
import Body from "./Body";

const Header = () => {
  const {
    nameData,
    setNameData,
    loading,
    setLoading,
    query,
    setQuery,
    department,
    setDepartment,
    assignment,
    setAssignment,
    position,
    setPosition,
  } = useContext(context);

  return (
    <>
      <div className="w-full h-full">
        <h1 className="text-[4vmin] text-center text-black p-4">
          Employee Directory
        </h1>
      </div>

      <div className="w-full h-full p-5  md:flex justify-center">
        <div>
          <input
            type="text"
            className="w-full h-full border rounded-md bg-transparent p-3"
            placeholder="Department"
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
            value={department}
          />
        </div>
        <div className="pl-1">
          <input
            type="text"
            className="w-full h-full border rounded-md bg-transparent p-3"
            placeholder="Position"
            onChange={(e) => {
              setPosition(e.target.value);
            }}
            value={position}
          />
        </div>
        <div className="pl-1">
          <select
            type="text"
            className="w-full h-full border rounded-md bg-transparent p-3"
            placeholder="Position"
            onChange={(e) => {
              setAssignment(e.target.value);
            }}
            value={assignment}
          >
            <option value="department">Department</option>
            <option value="product">Product</option>
            <option value="resource">Human Recourses</option>
          </select>
        </div>
        <div className="pl-1">
          <input
            type="text"
            className="w-full h-full border rounded-md bg-transparent p-3"
            placeholder="Employee Name..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
          />
        </div>
      </div>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <Body nameData={nameData} />
      )}
    </>
  );
};

export default Header;
