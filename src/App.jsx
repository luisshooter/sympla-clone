import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, IconButton, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchText, setSearchText] = useState('');

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    }), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onSearchChange={setSearchText} />
      <Box p={2}>
        <IconButton onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Home searchText={searchText} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
