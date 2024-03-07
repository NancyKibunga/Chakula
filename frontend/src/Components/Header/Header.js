import React from 'react'
import classes from './header.module.css';

  
export default function Header() {

    const user={
        name:'John',

    };
    const cart={
        totalCount:10,
    };

  return (
  <header className={classes.header}>
    <div className={classes.container}>
        <Link to="/" className={classes.logo}>
            Chakula!
        </Link>

    </div>
  </header>
  )
}
