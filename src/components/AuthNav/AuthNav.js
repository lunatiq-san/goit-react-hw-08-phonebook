import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Log in
        <ExitToAppIcon className={styles.icon} />
      </NavLink>
    </div>
  );
}
