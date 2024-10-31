import React from "react";
import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";

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

const JokeDetails = () => {
  const params = useParams();

  const joke = DUMMY_JOKES.find((joke) => joke.id === params.jokeId);

  if(!joke) {
    return <h1 className="centered">Joke not found</h1>;
  }

  return (
    <>
      <HighlightedJoke text={joke.text} topic={joke.topic} />
      <Route path="/jokes/:jokeId/comments">
        <Comments />
      </Route>
    </>
  );
};

export default JokeDetails;
