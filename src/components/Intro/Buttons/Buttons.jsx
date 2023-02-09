import React from 'react';
import { func } from 'prop-types';

import styles from './Buttons.module.scss';
import arrowIcon from './img/arrow.svg';

const IntroButtons = ({ toNext, toPrev }) => {
  return (
    <div className={styles.Buttons}>
      <button className={styles.Button} onClick={toPrev}>
        <img src={arrowIcon} alt="" />
      </button>

      <button className={styles.Button} onClick={toNext}>
        <img src={arrowIcon} alt="" />
      </button>
    </div>
  );
};

IntroButtons.propTypes = {
  toNext: func.isRequired,
  toPrev: func.isRequired
};

export default IntroButtons;
