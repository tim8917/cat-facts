import { createContext, useContext } from 'react';

export const CurrentFactContext = createContext(null);

export function useCurrentFact() {
  return useContext(CurrentFactContext);
}

export const CurrentFactProvider = CurrentFactContext.Provider;
