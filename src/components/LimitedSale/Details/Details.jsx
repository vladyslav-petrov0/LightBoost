import React from 'react';
import { oneOfType, string, number, exact } from 'prop-types';
import cn from 'classnames';

import Title from '../../ui/Title';

import styles from './Details.module.scss';

const LimitedSaleDetails = ({ title, price, description }) => {
  const oldPriceClasses = cn(styles.Price, styles.old);
  const newPriceClasses = cn(styles.Price, styles.new, styles.orange);

  return (
    <div className={styles.Details}>
      <h3 className={styles.Subtitle}>ELITE TOP PRIORITY</h3>

      <Title className={styles.Title} size="xl" color="white">
        {title}
      </Title>

      <p className={styles.Description}>{description}</p>

      <span className={oldPriceClasses}>${price.old}</span>

      <span className={newPriceClasses}>${price.new}</span>
    </div>
  );
};

LimitedSaleDetails.propTypes = {
  title: string.isRequired,
  price: exact({
    old: oneOfType([string, number]).isRequired,
    new: oneOfType([string, number]).isRequired
  }).isRequired,
  description: string.isRequired
};

export default LimitedSaleDetails;
