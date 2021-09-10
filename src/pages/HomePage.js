import React from 'react';
import styles from './Pages.module.css';

import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { yellow } from '@material-ui/core/colors';

const HomePage = () => (
  <>
    <h1 className={styles.title}>
      Welcome
      <span role="img" aria-label="Иконка приветствия">
        <EmojiPeopleIcon style={{ color: yellow[100], fontSize: 35 }} />
      </span>
      to the Phonebook
    </h1>
    <p className={styles.text}>
      Please, <span className={styles.dedicated}>Sign up</span> or{' '}
      <span className={styles.dedicated}>Log in</span>
    </p>
  </>
);

export default HomePage;
