import { cloneElement } from 'react';
import { string, element } from 'prop-types';

import cn from 'classnames';

import styles from './BaseButton.module.scss';

const BaseButton = ({ children, variant, className, ...otherProps }) => {
  const classes = cn(styles.Button, className, styles[variant]);
  return cloneElement(children, { ...otherProps, className: classes });
};

BaseButton.propTypes = {
  className: string,
  children: element.isRequired,
  variant: string
};

BaseButton.defaultProps = {
  variant: 'contained',
  className: ''
};

export default BaseButton;
