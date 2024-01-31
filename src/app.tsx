import { useEffect } from 'react';
import AppLayout from './components/app-layout/app-layout';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import { useRandomFact } from './hooks/use-random-fact';
import { CurrentFactProvider } from './contexts/current-fact-context';

function App() {
  const [fact, loadRandomFact] = useRandomFact();

  useEffect(() => {
    loadRandomFact();
  }, []);

  return (
    <CurrentFactProvider value={{fact, loadRandomFact}} >
      <ThemeProvider theme={theme}>
        <AppLayout />
      </ThemeProvider>
    </CurrentFactProvider>
  );
}

export default App;
