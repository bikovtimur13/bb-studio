import React, { FC } from 'react';
import styles from './MainContainer.module.scss';
import { MainContainerProps } from './_types'

/** Главный контейнер сайта */
const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        {children}
      </div>
    </div>
  );
}

export default MainContainer;
