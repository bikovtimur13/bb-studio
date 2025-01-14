import React, { FC } from 'react';
import styles from './Layout.module.scss';
import { LayoutProps } from './_types';

import localFont from 'next/font/local';

const manropeFont = localFont({
  src: [
    {
      path: 'public/fonts/manrope/Manrope-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-manrope'
})

/** Главный контейнер сайта */
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`${manropeFont.variable} font-sans`}>
      <div className={styles.main}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
