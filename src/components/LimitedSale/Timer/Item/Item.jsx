import React from 'react';
import { oneOfType, string, number } from 'prop-types';
import cn from 'classnames';

import styles from './Item.module.scss';

const TimerItem = ({ label, amount, className }) => {
  return (
    <span className={className}>
      {amount} <span className={styles.orange}>{label}</span>
    </span>
  );
};

TimerItem.propTypes = {
  label: string.isRequired,
  amount: oneOfType([string, number]).isRequired,
  className: string
};

TimerItem.defaultProps = {
  className: ''
};

export default TimerItem;
