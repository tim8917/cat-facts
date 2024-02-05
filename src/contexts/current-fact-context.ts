import { createContext, useContext } from 'react';
import { Fact } from '../types/cat-facts';

interface CurrentFactContextType {
  fact: Fact,
  addToFavourites: (fact: Fact) => void,
  loadRandomFact: () => void,
}

const CurrentFactContext = createContext<CurrentFactContextType>(null);

export function useCurrentFact() {
  return useContext(CurrentFactContext);
}

export const CurrentFactProvider = CurrentFactContext.Provider;
