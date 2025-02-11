// pages/api/clients.js
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@/src/components/ClientsSection/_types";

const handler = (_req: NextApiRequest, res: NextApiResponse<Client[]>) => {
  const clients: Client[] = [
    { id: 1, name: 'K7MEHTbI', logo: '/public/images/clients/bb-clients-option-1.webp' },
    { id: 2, name: 'Making tech', logo: '/public/images/clients/bb-clients-option-2.webp' },
    { id: 3, name: 'Calm Driving', logo: '/public/images/clients/bb-clients-option-3.webp' },
    { id: 4, name: 'OneOptics', logo: '/public/images/clients/bb-clients-option-4.webp' },
  ];
  res.status(200).json(clients);
};

export default handler;