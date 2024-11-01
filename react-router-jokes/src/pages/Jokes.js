import { useEffect } from "react";
import JokeList from "../components/jokes/JokeList";
import useHttp from "../hooks/use-http";
import { getJokes } from "../utils/firebase-api";
import Loader from "../components/UI/Loader";
import NoJokesFound from "../components/jokes/NoJokesFound";

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

const Jokes = () => {
  const {
    sendHttpRequest,
    status,
    data: loadedJokes,
    error,
  } = useHttp(getJokes, true);

  useEffect(() => {
    sendHttpRequest();
  }, [sendHttpRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <Loader />
      </div>
    );
  }

  if (status === "error") {
    return <div className="centered focused">{error}</div>;
  }

  if (status === "completed" && (!loadedJokes || loadedJokes.length === 0)) {
    return <NoJokesFound />;
  }
  return <JokeList jokes={loadedJokes} />;
};

export default Jokes;
