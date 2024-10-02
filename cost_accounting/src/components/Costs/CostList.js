import CostItem from "./CostItem";
import "./CostList.css"

const CostList = ({ costs }) => {
  if (costs.length === 0) {
    return (
      <h2 className="cost-list__fallback">
        There is no any costs in this year yet
      </h2>
    );
  }

  return (
    <ul className="cost-list">
      {costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default CostList;
