import React, { useState } from 'react';

import Portal from '../../../../components/Portal';
import CloseButton from '../../../../components/ui/CloseButton';
import Sidebar from '../../../../components/ui/Sidebar';
import NavBody from '../Body';
import BurgerBtn from './BurgerBtn';

import styles from './Sidebar.module.scss';

const rootNode = document.getElementById('root');

const NavSidebar = () => {
  const [isShowed, setShowed] = useState(false);
  const onHandleMenu = () => setShowed((prevState) => !prevState);
  const onClose = () => setShowed(false);

  const linkHandler = (e) => {
    const target = e.target?.closest('a') || e.target;
    if (target.tagName === 'A') {
      onClose();
    }
  };

  return (
    <>
      <BurgerBtn onClick={onHandleMenu} />

      <Portal isOpen to={rootNode}>
        <Sidebar
          isActive={isShowed}
          className={styles.Sidebar}
          onClose={onClose}
          directionFrom="right"
          onClick={linkHandler}>
          <CloseButton onClose={onClose} className={styles.CloseBtn} />
          <NavBody />
        </Sidebar>
      </Portal>
    </>
  );
};

export default NavSidebar;
