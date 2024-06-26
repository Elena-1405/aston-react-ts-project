import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MovieItem } from '../types/types';

interface FavoritesProviderProps {
  children: ReactNode;
}

interface FavoritesContextType {
  favorites: MovieItem[];
  addToFavorites: (movie: MovieItem) => void;
  removeFromFavorites: (movieId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addToFavorites: () => {
    console.warn('Метод addToFavorites не реализован.');
  },
  removeFromFavorites: () => {
    console.warn('Метод removeFromFavorites не реализован.');
  },
});

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<MovieItem[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorites(movie: MovieItem) {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  }

  const removeFromFavorites = (movieId: string) => {
    setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.id !== movieId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
