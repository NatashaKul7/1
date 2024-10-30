import React from "react";
import { useParams } from "react-router-dom";

const JokeDetails = () => {
  const params = useParams();
  return (
    <section>
      <h1>JokeDetails</h1>
      <p>{params.jokeId}</p>
    </section>
  );
};

export default JokeDetails;
