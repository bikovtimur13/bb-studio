import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';

import { SwiperComponentProps } from './_types';
import styles from './SwiperComponent.module.scss'

const SwiperComponent: React.FC<SwiperComponentProps> = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop
      autoplay

      className={styles.swiper}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div style={{ textAlign: 'center' }}>
            <Image src={slide.image} alt={slide.name}
              width={604}
              height={604}
              layout="responsive" />
            <p>{slide.name}</p>
            <p>{slide.position}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;