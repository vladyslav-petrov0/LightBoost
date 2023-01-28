import React from 'react';
import { func, string } from 'prop-types';
import cn from 'classnames';

import styles from './CloseButton.module.scss';

const CloseButton = ({ className, onClose, ...props }) => {
  const classes = cn(styles.Btn, className);

  return (
    <button className={classes} onClick={onClose} {...props}>
      <span className={styles.LeftStick}></span>
      <span className={styles.RightStick}></span>
    </button>
  );
};

CloseButton.propTypes = {
  className: string,
  onClose: func.isRequired
};

CloseButton.defaultProps = {
  className: ''
};

export default CloseButton;
