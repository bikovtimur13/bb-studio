import type { NextApiRequest, NextApiResponse } from "next";
import { ReviewData } from "@/src/components/Reviews/_types";

export default function handler(req: NextApiRequest, res: NextApiResponse<ReviewData[]>) {
  res.status(200).json([
    {
      review: "ТЕСТ! Работа с этой веб- студией превзошла все ожидания! Профессиональный подход, креативные решения и безупречная реализация проекта сделали сотрудничество истинным удовольствием.",
      image: "/images/reviews/bb-reviews-option-1-test.webp",
      company: "Test Company"
    },
    {
      review: "ТЕСТ! Отличная команда специалистов создала нам сайт мечты. Уникальный дизайн, удобная навигация и отличная оптимизация - всё это воплотили они в реальность!",
      image: "/images/reviews/bb-reviews-option-2-test.webp",
      company: "Test Company"
    },
    {
      review: "ТЕСТ! Работа с этой веб- студией превзошла все ожидания! Профессиональный подход, креативные решения и безупречная реализация проекта сделали сотрудничество истинным удовольствием.",
      image: "/images/reviews/bb-reviews-option-1-test.webp",
      company: "Test Company"
    },
    {
      review: "ТЕСТ! Отличная команда специалистов создала нам сайт мечты. Уникальный дизайн, удобная навигация и отличная оптимизация - всё это воплотили они в реальность!",
      image: "/images/reviews/bb-reviews-option-2-test.webp",
      company: "Test Company"
    },
  ]);
}