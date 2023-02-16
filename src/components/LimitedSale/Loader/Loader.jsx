import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Container from '../../ui/Container';
import cn from 'classnames';

import styles from './Loader.module.scss';

const LimitedSaleLoader = () => {
  return (
    <div className={styles.Loader}>
      <Container className={styles.Container}>
        <Skeleton className={styles.Skeleton} containerClassName={styles.SkeletonContainer} />
      </Container>
    </div>
  );
};

export default LimitedSaleLoader;
