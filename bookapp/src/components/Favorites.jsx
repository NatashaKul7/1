import { useAppContext } from "./context/appContext";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesCheck = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img alt="book-poster" src={book.image_url} />
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
        ))
      ) : (
        <h1>You don't have any favorites yet</h1>
      )}
    </div>
  );
};

export default Favorites;
