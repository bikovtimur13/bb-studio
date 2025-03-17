import type { NextApiRequest, NextApiResponse } from "next";
import { ReviewData } from "@/src/components/Reviews/_types";

export default function handler(req: NextApiRequest, res: NextApiResponse<ReviewData[]>) {
  res.status(200).json([
    {
      review: "What sets them apart from so many other teams is much more than just the work they launch. Their highly collaborative, thoughtful, and generous approach to doing business makes the journey to launch day a true pleasure and ensures their clients end up with even better results than they ever imagined.",
      image: "test.png",
      company: "Test Company"
    }
  ]);
}