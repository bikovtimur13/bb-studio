import React from 'react';
import { useRouter } from 'next/router';

import CompanyMainLogo from '../CompanyMainLogo/CompanyMainLogo';

import styles from './Header.module.scss';

/** внешний футер сайта */
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <CompanyMainLogo/>
            </div>
        </div>
    );
}

export default Header;
