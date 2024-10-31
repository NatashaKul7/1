import React from "react";
import JokeList from "../components/jokes/JokeList";

const DUMMY_JOKES = [
  {
    id: "j1",
    topic: "Programming",
    text: "Programming",
  },
  {
    id: "j2",
    topic: "General",
    text: "General",
  },
];

const Jokes = () => {
  return <JokeList jokes={DUMMY_JOKES}/>;
};

export default Jokes;
