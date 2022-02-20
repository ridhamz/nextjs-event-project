import { useRouter } from 'next/router';
import React from 'react';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

export default function EventsPage() {
  const events = getAllEvents();

  const router = useRouter();

  const onSearch = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <div>
      <EventSearch onSearch={onSearch} />
      <EventList list={events} />
    </div>
  );
}
