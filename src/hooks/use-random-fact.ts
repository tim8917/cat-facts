import { useState } from 'react';
import { Fact } from '../../src/model';

export const useRandomFact = (defaultFact?: Fact) => {
  const [fact, setFact] = useState<Fact>(defaultFact);

  function loadRandomFact () {
    window.api.getRandomCatFact().then((fact) => {
      setFact(fact);
    });
  }

  return {fact, setFact, loadRandomFact};
}
