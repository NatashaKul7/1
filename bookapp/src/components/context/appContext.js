import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext much be within appContextProvider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (book) => {
    const isFavorite = favorites.find((fav) => fav.id === book.id);

    if (!isFavorite) {
      setFavorites([...favorites, book]);
    }
  };

  const removeFromFavorites = (bookId) => {
    setFavorites(favorites.filter((fav) => fav.id !== bookId));
  };

  return (
    <AppContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
