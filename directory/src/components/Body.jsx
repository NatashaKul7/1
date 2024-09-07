import { useContext } from "react";
import icon from "../images/icon.png";
import { context } from "../content/AuthContext";

const Body = ({ nameData }) => {
  const { query, department, assignment, position } = useContext(context);

  console.log(nameData);

  return (
    <>
      <div className="w-full h-full md:grid grid-cols-3 md:gap-4 ">
        {nameData
          ?.filter((data) => {
            if (query === "") {
              return true;
            } else {
              const fullName = `${data.first_name}${data.last_name}`;
              return fullName?.toLowerCase().includes(query);
            }
          })
          .filter((data) => {
            if (department === "") {
              return true;
            } else {
              return data.department?.toLowerCase().includes(department);
            }
          })
          .filter((data) => {
            if (position === "") {
              return true;
            } else {
              return data.job_title?.toLowerCase().includes(position);
            }
          })
          .filter((data) => {
            if (assignment === "product") {
              return data.department.toLowerCase().includes("product");
            } else if (assignment === "resource") {
              return data.department?.toLowerCase().includes("resource");
            }
            return true;
          })
          .map((data) => {
            return (
              <div className="w-full h-full p-5 text-center" key={data.id}>
                <img src={icon} alt="avatar" className="md:h-[50vmin] w-full object-contain" />
                <h2>
                  {data.first_name}
                  {data.last_name}
                </h2>
                <h2>{data.address}</h2>
                <h2>{data.job_title}</h2>
                <h2>{data.department}</h2>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Body;
