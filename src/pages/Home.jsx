import { useState } from 'react';
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

  const eventsPerPage = 4;

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const paginatedEvents = filteredEvents.slice(page * eventsPerPage, (page + 1) * eventsPerPage);

  return (
    <>
      <FilterBar date={date} setDate={setDate} price={price} setPrice={setPrice} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {paginatedEvents.map(event => <EventCard key={event.id} event={event} />)}
      </div>
      <Pagination
        onPrev={() => setPage(p => Math.max(p - 1, 0))}
        onNext={() => setPage(p => (page + 1 < Math.ceil(filteredEvents.length / eventsPerPage) ? p + 1 : p))}
      />
      <FeedbackModal />
    </>
  );
}
