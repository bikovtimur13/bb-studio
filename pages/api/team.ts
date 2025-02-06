// pages/api/team.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { TeamMember } from "@/src/components/OurTeam/_types";

const handler = (_req: NextApiRequest, res: NextApiResponse<TeamMember[]>) => {
  const teamMembers: TeamMember[] = [
    { id: 1, name: "Быков Тимур", position: "основатель и ведущий web - разработчик", image: "/public/images/bb-ourteam-option-1.webp" },
    { id: 2, name: "Вячеслав Верман", position: "арт-директор и ведущий Web - дизайнер", image: "/public/images/bb-ourteam-option-2.webp" },
    { id: 3, name: "Аксорова Аминат", position: "Маркетолог", image: "/public/images/bb-ourteam-option-3.webp" },
  ];
  res.status(200).json(teamMembers);
};

export default handler;