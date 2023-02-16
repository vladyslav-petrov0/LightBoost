import React from 'react';

import Container from '../../ui/Container';
import ErrorMessage from '../../ui/ErrorMessage';

import styles from './Error.module.scss';

const LimitedSaleError = ({ ...props }) => {
  return (
    <Container className={styles.Container}>
      <ErrorMessage {...props} />
    </Container>
  );
};

export default LimitedSaleError;
