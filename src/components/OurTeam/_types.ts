export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string; // URL изображения
  description?: string; // Опциональное описание
}