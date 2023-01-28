import React from 'react';
import { bool, func, node, oneOf, string } from 'prop-types';
import cn from 'classnames';

import Portal from '../../Portal';
import Overlay from '../../Overlay';

import styles from './Sidebar.module.scss';

const appNode = document.getElementById('root');

const Sidebar = ({ isActive, children, className, onClose, directionFrom, ...props }) => {
  const classes = cn(styles.Sidebar, className, styles[directionFrom], {
    active: isActive
  });

  document.body.style.overflow = isActive ? 'hidden' : '';

  return (
    <div className={classes} {...props}>
      {children}

      <Portal isOpen to={appNode}>
        <Overlay isActive={isActive} onCloseOverlay={onClose} />
      </Portal>
    </div>
  );
};

Sidebar.propTypes = {
  isActive: bool.isRequired,
  children: node.isRequired,
  className: string,
  onClose: func.isRequired,
  directionFrom: oneOf(['top', 'bottom', 'left', 'right']).isRequired
};

Sidebar.defaultProps = {
  className: '',
  isActive: false,
  directionFrom: 'right'
};

export default Sidebar;
