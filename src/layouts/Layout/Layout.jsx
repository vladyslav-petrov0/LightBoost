import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.HeaderPlaceholder}></div>
      <Outlet />
      <Footer />
    </>
  );
};

Layout.propTypes = {};

export default Layout;
