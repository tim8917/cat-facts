import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h2>Hello from React!</h2>
    </ThemeProvider>
  );
}

export default App;
