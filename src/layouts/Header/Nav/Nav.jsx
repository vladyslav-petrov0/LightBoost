import React from 'react';
import { useMediaQuery } from 'react-responsive';

import NavBody from './Body';
import NavSidebar from './Sidebar';

const HeaderNav = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 921px)' });
  return isDesktop ? <NavBody /> : <NavSidebar />;
};

export default HeaderNav;
