// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === "POST") {
        if (req.body.intent === "getMenu") {
            const menu = await prisma.menu.findMany()
            res.status(200).json(menu)
        }else if (req.body.intent === "placeOrder") {
            const orders = await prisma.tabla.create({
                data: {
                    orders: {
                        create: [
                            { plate: req.body.orderName },
                        ]
                    }
                }
            })
            res.status(200).json(orders)
        }
    }
}
