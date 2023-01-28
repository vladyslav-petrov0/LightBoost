import React from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';

import styles from './Body.module.scss';

const NavBody = () => {
  const listClasses = cn(styles.List, styles.MainList);

  return (
    <nav className={styles.Nav}>
      <ul className={listClasses}>
        <li className={styles.ListItem}>
          <Link to="/" className={styles.Link}>
            Home
          </Link>
        </li>

        <li className={styles.ListItem}>
          <Link to="/about" className={styles.Link}>
            About us
          </Link>
        </li>

        <li className={styles.ListItem}>
          <Link to="/shop" className={styles.Link}>
            SHOP
          </Link>
        </li>

        <li className={styles.ListItem}>
          <Link to="/contacts" className={styles.Link}>
            CONTACTS
          </Link>
        </li>
      </ul>

      <ul className={styles.List}>
        <li className={styles.AccountItem}>
          <Link to="/login" className={styles.Link}>
            Login
          </Link>
        </li>

        <li className={styles.AccountItem}>
          <Link to="/signup" className={styles.Link}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBody;
