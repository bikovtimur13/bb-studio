import React, { FC } from 'react';
import styles from './Footer.module.scss';

import Link from 'next/link';
import { FooterNavigationType } from './_types';
import CompanyMainLogo from '../CompanyMainLogo/CompanyMainLogo';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

/** внешний футер сайта */
const navigation: FooterNavigationType[] = [
  { name: "Главная", href: "/", id: 1 },
  { name: "Разработка", href: "/development", id: 2 },
  { name: "Продвижение", href: "/promotion", id: 3 },
  { name: "Кейсы", href: "/cases", id: 4 },
  { name: "Карьера", href: "/career", id: 5 },
  { name: "Контакты", href: "/contacts", id: 6 },
  { name: "+7 (927) 471-30-13", href: "tel:+79274713013", id: 7 },
  { name: "delobykova@yandex.com", href: "mailto:delobykova@yandex.com", id: 8 },
  { name: "Telegram", href: "https://t.me/bikovtimur13", id: 9 },
  { name: "Instagram", href: "https://www.instagram.com/bikovtimur13", id: 10 },
  { name: "Политика конфиденциальности", href: "", id: 11 },
  { name: "Дело Быкова © 2024", href: "/", id: 12 },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='main-wrapper'>
        <div className={styles.footer__container}>

          <Link className={styles.footer__logo} href="/">
            <CompanyMainLogo />
          </Link>

          <ul className={styles.footer__navLinksContainer}>
            {
              navigation.map((item: FooterNavigationType) => (
                <li className={styles.footer__navLi} key={item.href}>
                  <Link href={item.href}
                    className={styles.footer__navLinks}
                  >
                    {item.name}
                  </Link>
                </li>
              ))
            }
          </ul>

          <ScrollToTopButton />
        </div>
      </div>
    </footer>
  )
};

export default Footer;