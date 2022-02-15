import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList list={featuredEvents} />
    </div>
  );
}
