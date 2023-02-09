import React from 'react';

import Intro from '../../components/Intro';

import styles from './Home.module.scss';

const HomePage = () => {
  return (
    <main className={styles.HomePage}>
      <Intro />
    </main>
  );
};

export default HomePage;
