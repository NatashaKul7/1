import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BOOK_DETAILS_URL } from "../api";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="book-details">
      <div className="book-img">
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt="book-poster" />
      </div>
      <div className="book-info">
        <h2>Description</h2>
        <p>{book.description}</p>
        <h2>Authors</h2>
        <h2>{book.authors}</h2>
        <h2>Genres</h2>
        <p>{book.genres}</p>
      </div>
    </div>
  );
};

export default BookDetails;
