import React from 'react';
import { string } from 'prop-types';
import BaseButton from '../BaseButton';

const Button = ({ children, ...otherProps }) => {
  return (
    <BaseButton {...otherProps}>
      <button>{children}</button>
    </BaseButton>
  );
};

Button.propTypes = {
  children: string.isRequired
};

export default Button;
