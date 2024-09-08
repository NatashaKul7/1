import { useEffect, useState } from "react";
import axios from "axios";

import { API_URL } from "../api";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();

  const favoritesCheck = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books &&
        books.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img
                alt="book-poster"
                src={book.image_url}
                onClick={() => navigate(`/books/${book.id}`)}
              />
            </div>
            <div>
              {favoritesCheck(book.id) ? (
                <button onClick={() => removeFromFavorites(book.id)}>
                  Remove from favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  Add to favorites
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookList;
