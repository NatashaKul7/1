import React from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <section>
      <h1>Articles</h1>
      <ul>
        <Link to="/articles/article1">Article1</Link>
        <Link to="/articles/article2">Article2</Link>
        <Link to="/articles/article3">Article3</Link>
      </ul>
    </section>
  );
};

export default Articles;
