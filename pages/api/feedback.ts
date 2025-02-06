import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { feedbackSchema } from "@/lib/validations/feedback";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = feedbackSchema.parse(body);
    // Сохраняем данные в базе данных
    const feedback = await prisma.feedback.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
      },
    });
    console.log("Данные сохранены:", feedback);
    return NextResponse.json({ message: "Данные успешно сохранены!", feedback }, { status: 200 });
  } catch (err) {
    console.error("Ошибка при обработке запроса:", err);
    return NextResponse.json({ message: "Неверные данные" }, { status: 400 });
  }
}