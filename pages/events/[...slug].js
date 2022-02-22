import { useRouter } from 'next/router';
import React from 'react';
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-data';

export default function FilteredEventsPage() {
  const router = useRouter();
  const data = router.query.slug || [0, 0];
  console.log(data);

  //if (!data[0] || !data[1]) return <p>Loading...</p>;
  const filteredEvents = getFilteredEvents({ year: data[0], month: data[1] });

  if (!filteredEvents || filteredEvents.length === 0)
    return <p className="center">No events found for chosen filter! </p>;

  return <EventList list={filteredEvents} />;
}
