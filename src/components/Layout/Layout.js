import React from 'react';
import styles from './Layout.module.css';
import MobileNav from '../MobileNav/MobileNav';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
      <MobileNav />
    </div>
  )
};

export default Layout;
