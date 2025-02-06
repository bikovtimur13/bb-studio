export interface Slide {
  id: number;
  name: string;
  position?: string;
  image: string; // URL изображения
  description?: string; // Опциональное описание
}

export interface SwiperComponentProps {
  slides: Slide[];
}