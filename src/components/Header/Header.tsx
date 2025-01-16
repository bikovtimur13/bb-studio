import React from 'react';
import { useRouter } from 'next/router';

import CompanyMainLogo from '../CompanyMainLogo/CompanyMainLogo';
import { HeaderProps, NavigationType } from './_types';

import styles from './Header.module.scss';
import Link from 'next/link';

/** внешний футер сайта */
const navigation: NavigationType[] = [
    { name: "Разработка", href: "/development", id: 1 },
    { name: "Продвижение", href: "/promotion", id: 2 },
    { name: "Кейсы", href: "/cases", id: 3 },
    { name: "Карьера", href: "/career", id: 4 },
    { name: "Контакты", href: "/contacts", id: 5 },
];

const Header = ({ pathname }: HeaderProps) => {
    const isHomePage = pathname === '/';
    const mainPage = isHomePage ? styles['main'] : styles[''];
    const activePathName = pathname;

    return (
        <div className='main-wrapper'>
            <header className={styles.header}>
                <nav className={styles.header__container}>
                    {!isHomePage &&
                        <Link className={styles.header__logo} href="/">
                            <CompanyMainLogo />
                        </Link>
                    }
                    <div className={styles.header__navLinksContainer}>
                        {
                            navigation.map((item: NavigationType) => (
                                <Link href={item.href}
                                    className={`${styles.header__navLink} ${mainPage || ''} ${activePathName === item.href ? styles['active'] : ''}`}
                                >
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>
                    <Link href='#contactUsForm' className={`${styles.header__contactUsBtn} ${mainPage}`}>Связаться</Link>
                </nav>
            </header>
        </div >
    );
}

export default Header;
