import React from 'react';
import EventItem from './event-item';
import classes from './event-list.module.css';

export default function EventList({ list }) {
  return (
    <ul className={classes.list}>
      {list.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
