import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function FilterBar({ date, setDate, price, setPrice }) {
  return (
    <Box display="flex" gap={2} my={2}>
      <FormControl>
        <InputLabel>Data</InputLabel>
        <Select value={date} onChange={(e) => setDate(e.target.value)} label="Data">
          <MenuItem value="all">Todas</MenuItem>
          <MenuItem value="today">Hoje</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Preço</InputLabel>
        <Select value={price} onChange={(e) => setPrice(e.target.value)} label="Preço">
          <MenuItem value="all">Todos</MenuItem>
          <MenuItem value="free">Gratuito</MenuItem>
          <MenuItem value="paid">Pago</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
