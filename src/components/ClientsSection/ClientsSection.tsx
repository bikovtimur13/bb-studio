import React, { FC } from 'react';
import styles from './ClientsSection.module.scss';
import SwiperComponent from '../SwiperComponent/SwiperComponent';

import useSWR from 'swr';
import { Client } from "@/src/components/ClientsSection/_types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ClientsSection = () => {
  const { data, error } = useSWR('/api/clients', fetcher);

  if (error) return <div>Ошибка загрузки данных</div>;
  if (!data) return <div>Загрузка...</div>;

  // Преобразуем данные в слайды для Swiper
  const slides = data.map((client: Client) => (
    <div key={client.id} className={styles.clients__slide}>
      <img src={client.logo} alt={client.name} className={styles.clients__logo} />
      {/* <p className={styles.clients__name} > {client.name}</p> */}
    </div >
  ));

  return (
    <div className={styles.clients}>
      <div className='main-wrapper'>
        <div className={styles.clients__container}>
          <p className={styles.clients__heading}>клиенты</p>
          {/* Используем SwiperComponent для отображения слайдов */}
          <SwiperComponent
            slides={slides}
            navigation={true} // Отключаем навигацию
            pagination={{ clickable: false }} // Настраиваем пагинацию
            scrollbar={false} // Отключаем скроллбар
            autoplay={true} // Включаем автоплей с задержкой 5 секунд
            spaceBetween={30} // Расстояние между слайдами
            slidesPerView={2} // Количество слайдов на экране
          />
        </div>
      </div>
    </div>
  );
};
export default ClientsSection;