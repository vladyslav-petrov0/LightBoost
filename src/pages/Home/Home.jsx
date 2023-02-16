import React from 'react';

import Intro from '../../components/Intro';
import LimitedSale from '../../components/LimitedSale';

import styles from './Home.module.scss';

const HomePage = () => {
  return (
    <main className={styles.HomePage}>
      <Intro className={styles.Intro} />
      <LimitedSale />
    </main>
  );
};

export default HomePage;
