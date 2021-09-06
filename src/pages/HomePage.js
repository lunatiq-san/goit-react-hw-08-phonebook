import React from 'react';
import styles from './Pages.module.css';

const HomePage = () => (
  <h1 className={styles.title}>
    Приветственная страница нашего сервиса{' '}
    <span role="img" aria-label="Иконка приветствия">
      💁‍♀️
    </span>
  </h1>
);

export default HomePage;
