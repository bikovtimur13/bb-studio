import { z } from "zod";

export const feedbackSchema = z.object({
  name: z.string().min(1, { message: "Имя обязательно" }),
  email: z.string().email({ message: "Некорректный email" }),
  phone: z.string().min(10, { message: "Телефон должен содержать минимум 10 символов" }),
  company: z.string().optional(),
});

export type FeedbackFormData = z.infer<typeof feedbackSchema>;