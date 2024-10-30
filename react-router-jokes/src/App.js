import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/layout/Header";
import Jokes from "./pages/Jokes";
import AddJoke from "./pages/AddJoke";
import JokeDetails from "./pages/JokeDetails";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/jokes" />
          </Route>
          <Route path="/jokes" exact> 
            <Jokes />
          </Route>
          <Route path="/jokes/:jokeId">
            <JokeDetails />
          </Route>
          <Route path="/add-joke">
            <AddJoke />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
