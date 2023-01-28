import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { debounce } from '../../utils/functions/debounce.js';

import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container';
import headerLogo from '../../assets/icons/logo.svg';
import HeaderNav from './Nav';

import styles from './Header.module.scss';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const header = useRef(null);

  const onScroll = () => {
    const elemHeight = parseFloat(getComputedStyle(header.current).height);

    let y = 0,
      yPrev = 0;

    return debounce(() => {
      y = window.pageYOffset;

      if (y > yPrev && y > elemHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      yPrev = y;
    }, 100);
  };

  useEffect(() => {
    const f = onScroll();

    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);

  const classes = cn(styles.Header, {
    [styles.visible]: isVisible
  });

  return (
    <header className={classes} ref={header}>
      <Container>
        <div className={styles.Body}>
          <Link to="/" className={styles.Logo}>
            <img src={headerLogo} alt="" />
          </Link>

          <HeaderNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
