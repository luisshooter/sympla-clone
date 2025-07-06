import { useState } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import FilterBar from '../components/FilterBar';
import EventCard from '../components/EventCard';
import Pagination from '../components/Pagination';
import FeedbackModal from '../components/FeedbackModal';
import eventsData from '../data/events.json';

export default function Home() {
  const [date, setDate] = useState('all');
  const [price, setPrice] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(0);

  const eventsPerPage = 6;

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const paginatedEvents = filteredEvents.slice(page * eventsPerPage, (page + 1) * eventsPerPage);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" my={3} fontWeight={600}>
        Eventos Esportivos
      </Typography>

      <FilterBar date={date} setDate={setDate} price={price} setPrice={setPrice} />

      <Grid container spacing={3}>
        {paginatedEvents.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        onPrev={() => setPage(p => Math.max(p - 1, 0))}
        onNext={() => setPage(p => (page + 1 < Math.ceil(filteredEvents.length / eventsPerPage) ? p + 1 : p))}
      />

      <FeedbackModal />
    </Container>
  );
}
