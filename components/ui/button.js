import Link from 'next/link';
import React from 'react';
import classes from './button.module.css';

export default function Button({ link, onClick, children }) {
  if (!link)
    return (
      <button className={classes.btn} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <Link href={link}>
      <a className={classes.btn}> {children} </a>
    </Link>
  );
}
