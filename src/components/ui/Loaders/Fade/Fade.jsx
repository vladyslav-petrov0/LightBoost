import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';

import styles from './FadeLoader.module.scss';

const FadeLoader = ({ className }) => {
  const classes = classNames(styles.className, [`${className}`]);

  return <div className={classes}></div>;
};

FadeLoader.propTypes = {
  className: string
};

FadeLoader.defaultProps = {
  className: ''
};

export default FadeLoader;
