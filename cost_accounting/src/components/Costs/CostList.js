import { useState } from "react";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import CostItem from "./CostItem";
import "./CostsList.css";

function CostList({ costs }) {
  const [selectedYear, setSelectedYear] = useState("2024");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      
      <Card className="costs">
      <CostFilter
        onChangeYear={yearChangeHandler}
        selectedYear={selectedYear}
      />
        <CostItem
          date={costs[0].date}
          description={costs[0].description}
          amount={costs[0].amount}
        />
        <CostItem
          date={costs[1].date}
          description={costs[1].description}
          amount={costs[1].amount}
        />
        <CostItem
          date={costs[2].date}
          description={costs[2].description}
          amount={costs[2].amount}
        />
      </Card>
    </div>
  );
}

export default CostList;
