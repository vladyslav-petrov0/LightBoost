import React from 'react';
import { string } from 'prop-types';

import Title from '../../ui/Title';
import Text from '../../ui/Text';
import LinkButton from '../../ui/LinkButton';

import styles from './Details.module.scss';

const IntroDetails = ({ title, text, linkTo }) => {
  return (
    <div className={styles.Details}>
      <Title className={styles.Title} size="xl">
        {title}
      </Title>

      <Text className={styles.Text}>{text}</Text>

      <LinkButton to={linkTo} className={styles.Button} variant="outlined">
        Buy now
      </LinkButton>
    </div>
  );
};

IntroDetails.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
  linkTo: string.isRequired
};

export default IntroDetails;
