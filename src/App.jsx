import { useState, useMemo } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  IconButton
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchText, setSearchText] = useState('');

  // Criação do tema claro/escuro
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          background: {
            default: darkMode ? '#121212' : '#f5f5f5',
            paper: darkMode ? '#1f1f1f' : '#ffffff'
          }
        }
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Cabeçalho com campo de busca */}
      <Header onSearchChange={setSearchText} />

      {/* Conteúdo principal com espaçamento */}
      <Box sx={{ p: 2 }}>
        {/* Botão de alternância de tema no canto superior direito */}
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <IconButton onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

        {/* Página com os eventos */}
        <Home searchText={searchText} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
