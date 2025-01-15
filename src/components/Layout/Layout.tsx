import React, { FC } from 'react';
import styles from './Layout.module.scss';
import { LayoutProps } from './_types';

/** Главный контейнер сайта */
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  );
}

export default Layout;
