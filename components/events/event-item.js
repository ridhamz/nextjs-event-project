import Link from 'next/link';
import React from 'react';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from './event-item.module.css';

export default function EventItem({ event }) {
  return (
    <li className={classes.item}>
      <img src={event.image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
        </div>
        <div className={classes.date}>
          <DateIcon />
          <time>{event.date}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{event.location}</address>
        </div>
        <div className={classes.actions}>
          <Button link={`events/${event.id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
