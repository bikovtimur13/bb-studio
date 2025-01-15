import React, { FC } from 'react';
import styles from './Hero.module.scss';

import CompanyMainLogo from '../CompanyMainLogo/CompanyMainLogo';
import Link from 'next/link';

/** Главный контейнер сайта */
const Hero = () => {
  return (
    <div className='main-wrapper'>
      <div className={styles.hero}>
        <Link href="/" className={styles.hero__logo}>
          <CompanyMainLogo />
        </Link>

        <p className={styles.hero__text}>
          Вебапп-студия с широкой душой и ясным взглядом
        </p>
      </div>
    </div>
  );
}

export default Hero;
