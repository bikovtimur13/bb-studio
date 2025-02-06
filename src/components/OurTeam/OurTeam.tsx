import React from 'react';
import useSWR from "swr";


import SwiperComponent from '../SwiperComponent/SwiperComponent';
import { TeamMember } from './_types';
import styles from './OurTeam.module.scss';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const OurTeam = () => {
  const { data, error } = useSWR("/api/team", fetcher);

  if (error) return <div>Ошибка загрузки данных</div>;
  if (!data) return <div>Загрузка...</div>; // Показываем индикатор загрузк

  return (
    <div className='main-wrapper'>
      <div className={styles.team}>
        <div className={styles.team__container}>
          <div className={styles.team__swiper}>
            <SwiperComponent slides={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;