import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './SwiperComponent.module.scss'

import { SwiperComponentProps } from './_types';

const SwiperComponent: React.FC<SwiperComponentProps> = ({
  slides,
  navigation = false,
  pagination = false,
  scrollbar = false,
  centeredSlides = false,
  autoplay = false,
  direction = 'horizontal',
  loop = false,
  modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay],
  spaceBetween = 0,
  slidesPerView = 1,
  breakpoints,
  ...rest // Остальные параметры Swiper
}) => {
  return (
    <Swiper
      modules={modules}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      navigation={navigation}
      pagination={pagination === true ? { clickable: true } : pagination}
      scrollbar={scrollbar === true ? { draggable: true } : scrollbar}
      autoplay={autoplay === true ? { delay: 3000, disableOnInteraction: false } : autoplay}
      loop={loop}
      centeredSlides={centeredSlides}
      direction={direction}
      {...rest} // Передаем остальные параметры Swiper
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;