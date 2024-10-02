import { useState } from "react";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import "./Costs.css";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

function Costs({ costs }) {
  const [selectedYear, setSelectedYear] = useState("2024");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="costs">
        <CostFilter
          onChangeYear={yearChangeHandler}
          selectedYear={selectedYear}
        />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs;
