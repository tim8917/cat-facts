import { createContext, useContext } from 'react';
import { Fact } from '../types/cat-facts';

const FavouriteFactsContext = createContext<Fact[]>([]);

export function useFavouriteFacts() {
  return useContext(FavouriteFactsContext);
}

export const FavouriteFactsProvider = FavouriteFactsContext.Provider;
