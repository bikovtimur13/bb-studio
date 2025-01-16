import React, { FC } from 'react';
import styles from './Hero.module.scss';

import logo from "/public/images/bb-main-logo.svg";
import airplaneImg from "/public/images/bb-airplane-img.webp";
import Link from 'next/link';
import Image from 'next/image';

/** Баннер на главной */
const Hero = () => {
  return (
    <div className='main-wrapper'>
      <div className={styles.hero}>
        <div className={styles.hero__imgPlaneContainer}>
          <Image src={airplaneImg} width={100} height={100} layout="responsive" alt="airplane-img" />
        </div>
        <Link href="/" className={styles.hero__logo}>
          <Image src={logo} width={100} height={100} layout='responsive' alt="logo" />
        </Link>
        <p className={styles.hero__text}>
          Вебапп-студия с широкой душой и ясным взглядом
        </p>
      </div>
    </div>
  );
}

export default Hero;
