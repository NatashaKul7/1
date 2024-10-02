import { useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const INITIAL_STATE = [
  {
    id: "c1",
    date: new Date(2024, 2, 12),
    description: "Fridge",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2023, 5, 1),
    description: "Table",
    amount: 77.99,
  },
  {
    id: "c3",
    date: new Date(2024, 11, 7),
    description: "Chair",
    amount: 100.99,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_STATE);

  const addCostHandler = (cost) => {
    setCosts((prevState) => {
      return [cost, ...prevState];
    });
  };

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
