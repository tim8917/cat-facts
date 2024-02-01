import { createContext, useContext } from 'react';

const FavouriteFactsContext = createContext([]);

export function useFavouriteFacts() {
  return useContext(FavouriteFactsContext);
}

export const FavouriteFactsProvider = FavouriteFactsContext.Provider;
