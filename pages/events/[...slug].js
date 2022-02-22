import { useRouter } from 'next/router';
import React from 'react';
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-data';

export default function FilteredEventsPage() {
  const router = useRouter();
  const [year, month] = router.query.slug;

  if (!year || !month) return <p>Loading...</p>;
  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0)
    return <p className="center">No events found for chosen filter!</p>;

  return <EventList list={filteredEvents} />;
}
