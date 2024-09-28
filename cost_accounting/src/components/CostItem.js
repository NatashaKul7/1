import "./CostIte.css";

function CostItem() {
  const costDate = new Date(2021, 2, 12).toLocaleDateString();
  const costDescription = "Fridge";
  const costAmount = 999.99;

  return (
    <div className="cost-item">
      <div>{costDate}</div>
      <div className="cost-item__description">
        <h2>{costDescription}</h2>
        <div className="cost-item__price">{costAmount}</div>
      </div>
    </div>
  );
}

export default CostItem;
