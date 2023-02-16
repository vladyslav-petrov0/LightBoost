import React from 'react';
import { number } from 'prop-types';

import TimerItem from './Item';
import { useBackgroundTimer } from './useBackgroundTimer.js';
import cn from 'classnames';

import styles from './Timer.module.scss';

const LimitedSaleTimer = ({ startTime, id }) => {
  const { days, hours, minutes, seconds, isUp } = useBackgroundTimer(startTime, id);

  const classes = cn(styles.Item, styles.EndWarning);
  const itemClasses = cn(styles.Item, { [styles.invisible]: isUp });
  const titleClasses = cn(styles.Title, { [styles.invisible]: isUp });

  return (
    <div className={styles.Timer}>
      <div className={styles.Body}>
        {isUp && <h2 className={classes}>SALE HAS ENDED</h2>}
        <h3 className={titleClasses}>UNTIL SALE END</h3>
        <TimerItem className={itemClasses} label="Days" amount={days} />
        <TimerItem className={itemClasses} label="Hours" amount={hours} />
        <TimerItem className={itemClasses} label="Minutes" amount={minutes} />
        <TimerItem className={itemClasses} label="Seconds" amount={seconds} />
      </div>
    </div>
  );
};

LimitedSaleTimer.propTypes = {
  startTime: number.isRequired
};

export default LimitedSaleTimer;
