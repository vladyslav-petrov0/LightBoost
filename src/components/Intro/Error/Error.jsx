import React from 'react';
import { func } from 'prop-types';

import Container from '../../ui/Container';
import ErrorMessage from '../../ui/ErrorMessage';

import styles from './Error.module.scss';

const IntroError = ({ refresh }) => {
  return (
    <Container className={styles.Container}>
      <ErrorMessage refresh={refresh} />
    </Container>
  );
};

IntroError.propTypes = {
  refresh: func.isRequired
};

export default IntroError;
