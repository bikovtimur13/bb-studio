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

  // Определяем минимальное количество необходимых слайдов
  const MIN_SLIDES_COUNT = 10; // например, 10 слайдов нужно для хорошего отображения

  // Создаем массив слайдов
  const createSlides = (clients: Client[]) => {
    let slidesArray = clients.map((client) => (
      <a href={client.link} key={client.id} className={styles.clients__link} target='_blank'>
        <img src={client.logo} alt={client.name} className={styles.clients__logo} />
      </a>
    ));

    // Если слайдов недостаточно, создаем дубликаты
    while (slidesArray.length < MIN_SLIDES_COUNT) {
      slidesArray = slidesArray.concat(
        clients.map((client) => (
          <a href={client.link} key={`${client.id}-${slidesArray.length}`} className={styles.clients__link} target='_blank'>
            <img src={client.logo} alt={client.name} className={styles.clients__logo} />
          </a>
        ))
      );
    }
    return slidesArray;
  };

  const slides = createSlides(data);

  return (
    <div className={styles.clients}>
      <div className='main-wrapper'>
        <div className={styles.clients__container}>
          <p className={styles.clients__heading}>клиенты</p>
          <div className={styles.clients__swiperContainer}>
            <SwiperComponent
              slides={slides}
              navigation={true} // Включаем навигацию
              pagination={false} // Настраиваем пагинацию
              scrollbar={false} // Отключаем скроллбар
              autoplay={true} // Включаем автоплей 
              spaceBetween={100} // Расстояние между слайдами
              slidesPerView={5} // Количество слайдов 
              loop={true}
              centeredSlides={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientsSection;