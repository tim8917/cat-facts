import { createContext, useContext } from 'react';

const CurrentFactContext = createContext(null);

export function useCurrentFact() {
  return useContext(CurrentFactContext);
}

export const CurrentFactProvider = CurrentFactContext.Provider;
