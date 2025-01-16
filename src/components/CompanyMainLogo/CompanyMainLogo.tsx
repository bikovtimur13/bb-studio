import React from 'react';
import styles from './CompanyMainLogo.module.scss';
import Image from 'next/image';
import logo from "/public/images/bb-main-logo.svg"

const CompanyMainLogo = () => {
    return (
        <div className={styles.logo}>
            <Image src={logo} width={100} height={100} layout='responsive' alt="logo" />
        </div>
    );
}

export default CompanyMainLogo;
