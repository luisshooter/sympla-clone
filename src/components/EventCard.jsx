import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

export default function EventCard({ event }) {
  return (
    <Card sx={{
      width: '100%',
      maxWidth: 300,
      height: 360,
      borderRadius: 3,
      boxShadow: 4,
      bgcolor: 'background.paper',
      color: 'text.primary',
      transition: '0.3s',
      ':hover': { transform: 'scale(1.03)', boxShadow: 6 }
    }}>
      <CardMedia
        component="img"
        height="160"
        image={event.image}
        alt={event.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>{event.title}</Typography>
        <Typography variant="body2" color="text.secondary">{event.location}</Typography>
        <Typography variant="caption" color="text.secondary">{event.date}</Typography>
      </CardContent>
    </Card>
  );
}

