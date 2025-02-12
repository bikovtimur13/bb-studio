// pages/api/clients.js
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@/src/components/ClientsSection/_types";

const handler = (_req: NextApiRequest, res: NextApiResponse<Client[]>) => {
  const clients: Client[] = [
    { id: 1, name: 'OneOptics', logo: '/images/clients/bb-clients-option-1-test.svg' },
    { id: 2, name: 'Making tech', logo: '/images/clients/bb-clients-option-2-test.svg' },
  ];
  res.status(200).json(clients);
};

export default handler;