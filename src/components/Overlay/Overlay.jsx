import React, { useRef } from 'react';
import { bool, func } from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import '../../utils/scss/transitions/fade-in.scss';
import styles from './Overlay.module.scss';

const Overlay = ({ isActive, onCloseOverlay }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition nodeRef={nodeRef} in={isActive} classNames="fade-in" timeout={500} unmountOnExit>
      <div ref={nodeRef} className={styles.Overlay} onClick={onCloseOverlay}></div>
    </CSSTransition>
  );
};

Overlay.propTypes = {
  isActive: bool.isRequired,
  onCloseOverlay: func.isRequired
};

export default Overlay;
