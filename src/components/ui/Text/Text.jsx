import React from 'react';
import { node, string } from 'prop-types';
import cn from 'classnames';

import styles from './Text.module.scss';

const Text = ({ children, className, ...otherProps }) => {
  const classes = cn(styles.Text, className);

  return (
    <p {...otherProps} className={classes}>
      {children}
    </p>
  );
};

Text.propTypes = {
  children: node.isRequired,
  className: string
};

Text.defaultProps = {
  className: ''
};

export default Text;
