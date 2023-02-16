import React from 'react';
import { func } from 'prop-types';

import { BiError } from 'react-icons/bi';

import Title from '../Title';
import Text from '../Text';
import Button from '../Button';

import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ refresh }) => {
  return (
    <div className={styles.ErrorMessage}>
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
    </div>
  );
};

ErrorMessage.propTypes = {
  refresh: func.isRequired
};

export default ErrorMessage;
