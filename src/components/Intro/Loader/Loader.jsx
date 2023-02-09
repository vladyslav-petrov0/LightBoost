import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Container from '../../ui/Container';
import styles from './Loader.module.scss';

const IntroLoader = () => {
  return (
    <div className={styles.Loader}>
      <Container className={styles.Container}>
        <div className={styles.LeftSection}>
          <Skeleton containerClassName={styles.SkeletonContainer} className={styles.Skeleton} />
          <Skeleton containerClassName={styles.SkeletonContainer} className={styles.Skeleton} />
          <Skeleton containerClassName={styles.SkeletonContainer} className={styles.Skeleton} />
        </div>

        <Skeleton
          containerClassName={styles.SkeletonImageContainer}
          className={styles.SkeletonImage}
        />
      </Container>
    </div>
  );
};

export default IntroLoader;
