import React, { FC } from 'react';
import styles from './Footer.module.scss';

import { FooterNavigationType } from './_types';

/** внешний футер сайта */
const navigation: FooterNavigationType[] = [
  { name: "Главная", href: "/", id: 1 },
  { name: "Разработка", href: "/development", id: 2 },
  { name: "Продвижение", href: "/promotion", id: 3 },
  { name: "Кейсы", href: "/cases", id: 4 },
  { name: "Карьера", href: "/career", id: 5 },
  { name: "Контакты", href: "/contacts", id: 6 },
  { name: "+7 (927) 471-30-13", href: "tel:+79274713013", id: 7 },
];

const Footer = () => {
  return (
    <div className='main-wrapper'>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>

        </div>
      </footer>
    </div>
  )
};

export default Footer;