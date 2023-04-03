// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === "POST") {
           const { plate, ingredients, price } = req.body
           const prismaInstance = await prisma.menu.create({
               data: {
                   plate,
                   ingredients,
                   price
                }
            })
            res.status(200).json(prismaInstance)
    } else if (req.method === "GET") {
        const menu = await prisma.menu.findMany();
        res.status(200).json(menu)

    }
}
