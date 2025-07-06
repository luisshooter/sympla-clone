import { Card, CardMedia, CardContent, Typography } from '@mui/material';

export default function EventCard({ event }) {
  return (
    <Card sx={{ width: 250, backgroundColor: 'background.paper', color: 'text.primary' }}>
      <CardMedia component="img" height="140" image={event.image} />
      <CardContent>
        <Typography variant="h6">{event.title}</Typography>
        <Typography variant="body2">{event.location}</Typography>
        <Typography variant="caption">{event.date}</Typography>
      </CardContent>
    </Card>
  );
}
