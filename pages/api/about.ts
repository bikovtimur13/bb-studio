import type { NextApiRequest, NextApiResponse } from "next";
import { AboutUsData } from "@/src/components/AboutUs/_types";

export default function handler(req: NextApiRequest, res: NextApiResponse<AboutUsData>) {
  res.status(200).json({
    description: "Мы — команда, создающая сайты, которые работают на вас 24/7. С 2019 года мы создаем digital-продукты: от лендингов до интернет-магазинов и корпоративных порталов, которые не только выглядят стильно, но и приносят результат. Наш подход — это глубокий анализ и индивидуальные решения, которые помогают вашему бизнесу расти. Мы ценим доверие и стремимся к долгосрочному сотрудничеству. Доверьтесь нам, и ваш сайт станет мощным инструментом для успеха в digital-мире!",
    stats: [
      { value: "5", label: "Работаем для вас", meta: "Лет" },
      { value: "50+", label: "Выполненных проектов" },
      { value: "10", label: "Странах", meta: "В" },
    ],
  });
}