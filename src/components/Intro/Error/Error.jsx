import React from 'react';
import { func } from 'prop-types';

import Container from '../../ui/Container';
import { BiError } from 'react-icons/bi';
import Title from '../../ui/Title';
import Text from '../../ui/Text';
import Button from '../../ui/Button';

import styles from './Error.module.scss';

const IntroError = ({ refresh }) => {
  return (
    <Container className={styles.Container}>
      <BiError size={'50px'} className={styles.Icon} />

      <Title size="xs" className={styles.Title} color="black">
        Oops! <br /> Something went wrong!
      </Title>

      <Text className={styles.Text}>
        The error will soon get fixed <br /> You can try again by clicking the button below
      </Text>

      <Button className={styles.Button} onClick={refresh}>
        Try again
      </Button>
    </Container>
  );
};

IntroError.propTypes = {
  refresh: func.isRequired
};

export default IntroError;
