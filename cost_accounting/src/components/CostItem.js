import { useState } from "react";
import Card from "./Card";
import CostDate from "./CostDate";
import "./CostItem.css";

function CostItem(props) {
  const [description, setDescription] = useState(props.description);

  // let description = props.description

  const changeDescriptionHandler = () => {
    setDescription("New text");
  };

  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">{props.amount}</div>
      </div>
      <button onClick={changeDescriptionHandler}>Edit description</button>
    </Card>
  );
}

export default CostItem;
