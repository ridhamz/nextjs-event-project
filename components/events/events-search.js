import React from 'react';
import Button from '../ui/button';
import classes from './events-search.module.css';

export default function EventSearch(props) {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            <option value={'2021'}>2021</option>
            <option value={'2022'}>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month">
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}
