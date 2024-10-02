import { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);
    setIsFormOpen(false);

  };

  const cancelCostHandler = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="new-cost">
      {isFormOpen ? (
        <CostForm
          onFormClose={cancelCostHandler}
          onSaveCostData={saveCostDataHandler}
        />
      ) : (
        <button onClick={() => setIsFormOpen(true)}>Add new cost</button>
      )}
    </div>
  );
};

export default NewCost;
