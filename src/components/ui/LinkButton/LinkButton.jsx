import React from 'react';
import { element, string } from 'prop-types';
import { Link } from 'react-router-dom';

import BaseButton from '../BaseButton';

const LinkButton = ({ children, to, ...otherProps }) => {
  return (
    <BaseButton {...otherProps}>
      <Link to={to}>{children}</Link>
    </BaseButton>
  );
};

LinkButton.propTypes = {
  children: string.isRequired,
  to: string.isRequired
};

export default LinkButton;
