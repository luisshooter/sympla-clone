import { AppBar, Toolbar, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Header({ onSearchChange }) {
  return (
    <AppBar position="static" sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center" gap={1}>
          <SearchIcon />
          <InputBase
            placeholder="Pesquisar eventos, shows..."
            onChange={(e) => onSearchChange(e.target.value)}
            sx={{ color: 'inherit', width: 300 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
