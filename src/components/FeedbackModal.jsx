import { Box, Typography, Button } from '@mui/material';

export default function FeedbackModal() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        left: 20,
        bgcolor: 'background.paper',
        color: 'text.primary',
        p: 2,
        borderRadius: 2,
        zIndex: 999
      }}
    >
      <Typography variant="body2">De 1 a 7, qual o nível de esforço para encontrar o evento?</Typography>
      <Box display="flex" gap={1} mt={1}>
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <Button key={n} variant="outlined" size="small">{n}</Button>
        ))}
      </Box>
    </Box>
  );
}
