import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import { useRandomFact } from './hooks/use-random-fact';
import { CurrentFactProvider } from './contexts/current-fact-context';
import { FavouriteFactsProvider } from './contexts/favourite-facts-context';
import { useFavourites } from './hooks/use-favourites';
import { UserData } from './types/cat-facts';
import { AppLayout } from './components/app-layout/app-layout';

function App() {
  const {fact, setFact, loadRandomFact} = useRandomFact();
  const {favourites, setFavourites, addToFavourites} = useFavourites();

  useEffect(() => {
    window.fs.getUserData().then((userData: UserData) => {
      const isCurrentFactPresentOnInit = Boolean(userData.currentFact);
      const isFavouriteFactsDataPresentOnInit = Boolean(userData.currentFact);

      if (isCurrentFactPresentOnInit) {
        setFact(userData.currentFact);
      } else {
        loadRandomFact();
      }

      if (isFavouriteFactsDataPresentOnInit) {
        setFavourites(userData.favouriteFacts);
      }
    });
  }, []);

  useEffect(() => {
    const isUpdatingAction = Boolean(fact);

    if (!isUpdatingAction) {
      return ;
    } 
    
    const userData: UserData = {currentFact: fact, favouriteFacts: favourites};

    window.fs.saveUserData(userData);
  }, [fact, favourites]);


  return (
    <FavouriteFactsProvider value={favourites}>
      <CurrentFactProvider value={{fact, loadRandomFact, addToFavourites}} >
        <ThemeProvider theme={theme}>
          <AppLayout />
        </ThemeProvider>
      </CurrentFactProvider>
    </FavouriteFactsProvider>
  );
}

export default App;
