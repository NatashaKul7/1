import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import Articles from "./components/Articles";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to='/home'/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/articles" exact>
            <Articles />
          </Route>
          <Route path="/articles/:articleId">
            <ArticleDetail />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
