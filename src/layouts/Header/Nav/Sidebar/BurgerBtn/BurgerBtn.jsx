import React from 'react';

import styles from './BurgerBtn.module.scss';

const BurgerBtn = ({ ...props }) => {
  return (
    <button className={styles.BurgerBtn} {...props}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default BurgerBtn;
