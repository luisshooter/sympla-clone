import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Pagination({ onPrev, onNext }) {
  return (
    <Box display="flex" justifyContent="center" gap={1} my={2}>
      <IconButton onClick={onPrev}><ChevronLeftIcon /></IconButton>
      <IconButton onClick={onNext}><ChevronRightIcon /></IconButton>
    </Box>
  );
}
