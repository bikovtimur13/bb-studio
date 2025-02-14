export interface Stat {
  value: string;
  label: string;
  meta?: string; // Дополнительная характеристика 
}

export interface AboutUsData {
  description: string;
  stats: Stat[];
}
