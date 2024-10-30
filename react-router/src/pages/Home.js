import React from "react";
import { Route } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Home</h1>
      <Route path="/home/new-user">
        <h2>Добро пожаловать</h2>
        <p>Мы всегда рады новым друзьям</p>
      </Route>
    </section>
  );
};

export default Home;
