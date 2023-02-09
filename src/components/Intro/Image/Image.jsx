import React, { useState, useLayoutEffect, useRef } from 'react';
import { string } from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import styles from './Image.module.scss';

import { enter, enterActive, enterDone } from './transition.module.scss';
const transitionClassNames = { enter, enterActive, enterDone };

const IntroImage = ({ src }) => {
  const [loading, setLoading] = useState(true);
  const nodeRef = useRef(null);

  useLayoutEffect(() => {
    setLoading(true);
  }, [src]);

  const onLoad = () => setLoading(false);

  return (
    <div className={styles.ImageWrapper}>
      <CSSTransition
        nodeRef={nodeRef}
        in={!loading}
        timeout={500}
        classNames={transitionClassNames}>
        <img ref={nodeRef} src={src} alt="" className={styles.Image} onLoad={onLoad} />
      </CSSTransition>
    </div>
  );
};

IntroImage.propTypes = {
  src: string.isRequired
};

export default IntroImage;
