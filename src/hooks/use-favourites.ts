import { useState } from 'react';
import { Fact } from '../../src/model';

export const useFavourites = () => {
  const [favourites, setFavourites] = useState<Fact[]>([]);

  function addToFavourites(fact: Fact) {
    setFavourites([...favourites, fact]);
  }

  return {favourites, setFavourites, addToFavourites};
}
