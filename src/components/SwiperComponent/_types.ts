import { SwiperProps } from 'swiper/react';

export interface SwiperComponentProps {
  slides: React.ReactNode[];
  navigation?: boolean;
  pagination?: boolean | { clickable: boolean };
  scrollbar?: boolean | { draggable: boolean };
  autoplay?: boolean | { delay: number; disableOnInteraction: boolean };
  loop?: boolean;
  centeredSlides?: boolean;
  modules?: any[];
  spaceBetween?: number;
  slidesPerView?: number | 'auto';
  direction?: 'horizontal' | 'vertical';
  breakpoints?: { [key: number]: SwiperProps };
}