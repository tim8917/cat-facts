import { useEffect } from 'react';
import AppLayout from './components/app-layout/app-layout';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import { useRandomFact } from './hooks/use-random-fact';
import { CurrentFactProvider } from './contexts/current-fact-context';
import { FavouriteFactsProvider } from './contexts/favourite-facts-context';
import { useFavourites } from './hooks/use-favourites';
import { UserData } from './model';

function App() {
  const {fact, setFact, loadRandomFact} = useRandomFact();
  const {favourites, setFavourites, addToFavourites} = useFavourites();

  useEffect(() => {
    window.fs.getUserData().then((userData: UserData) => {
      if (userData.currentFact) {
        setFact(userData.currentFact);
      } else {
        loadRandomFact();
      }

      if (userData.favouriteFacts) {
        setFavourites(userData.favouriteFacts);
      }
    });
  }, []);

  useEffect(() => {
    if (!fact) {
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
