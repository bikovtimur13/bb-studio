import React from 'react';
import styles from './CompanyMainLogo.module.scss';
import Image from 'next/image';
import logo from "/public/images/bb-main-logo.svg"

const CompanyMainLogo = () => {
    return (
        <div className={styles.logo}>
            <Image width={312} height={88} src={logo} alt="logo" />
        </div>
    );
}

export default CompanyMainLogo;
