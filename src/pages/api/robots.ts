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
        } else if (req.body.intent === "placeOrder") {
            const order = JSON.parse(req.body.order)
            const orders = await prisma.tabla.update({
                data: {
                    orders: {
                        create: [
                            {
                                plate: order.plate,
                            }
                        ]
                    }
                },
                where: {
                    id: order.table
                }

            })
            console.log(JSON.parse(req.body.order))
            res.status(200).json(orders)
        }
        
    } else if (req.method === "GET") {
            const menu = await prisma.menu.findMany({
                select: {
                    plate: true,
                }
            })
            res.status(200).json(menu)
        }
}