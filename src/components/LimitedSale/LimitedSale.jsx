import React from 'react';
import cn from 'classnames';
import { useService, useFetch } from '../../hooks';

import LimitedSaleDetails from './Details';
import LimitedSaleTimer from './Timer';
import LimitedSaleLoader from './Loader';
import LimitedSaleError from './Error';
import Container from '../ui/Container';

import styles from './LimitedSale.module.scss';

const LimitedSale = ({ className }) => {
  const service = useService();
  const { data: saleItem = {}, error, loading, refetch } = useFetch(service.getLimitedSaleItem);

  const classes = cn(styles.LimitedSale, className);

  const { background, startTime, id } = saleItem;

  if (loading) {
    return <LimitedSaleLoader />;
  }

  if (error) {
    return <LimitedSaleError refresh={refetch} />;
  }

  return (
    <div className={classes} style={{ backgroundImage: `url(${background})` }}>
      <Container className={styles.Container}>
        <LimitedSaleDetails {...saleItem} />
        <LimitedSaleTimer startTime={startTime} id={id} />
      </Container>
    </div>
  );
};

LimitedSale.defaultProps = {
  className: ''
};

export default LimitedSale;
