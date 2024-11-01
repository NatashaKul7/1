import React, { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";
import useHttp from "../hooks/use-http";
import { getJoke } from "../utils/firebase-api";
import Loader from "../components/UI/Loader";

// const DUMMY_JOKES = [
//   {
//     id: "j1",
//     topic: "Programming",
//     text: "Programming",
//   },
//   {
//     id: "j2",
//     topic: "General",
//     text: "General",
//   },
// ];

const JokeDetails = () => {
  const routeMatch = useRouteMatch();
  const params = useParams();
  const { jokeId } = params;

  const {
    error,
    sendHttpRequest,
    status,
    data: loadedJoke,
  } = useHttp(getJoke, true);

  // const joke = DUMMY_JOKES.find((joke) => joke.id === params.jokeId);

  useEffect(() => {
    sendHttpRequest(jokeId);
  }, [sendHttpRequest, jokeId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <Loader />
      </div>
    );
  }

  if (status === "error") {
    return <p className="centered">{error}</p>;
  }

  if (!loadedJoke.text) {
    return <h1 className="centered">Joke not found</h1>;
  }

  return (
    <>
      <HighlightedJoke text={loadedJoke.text} topic={loadedJoke.topic} />
      <Route path={`${routeMatch.path}`} exact>
        <div className="centered">
          <Link className="btn--empty" to={`${routeMatch.url}/comments`}>
            Show comments
          </Link>
        </div>
      </Route>

      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default JokeDetails;
