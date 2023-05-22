// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === "POST") {
        if (req.body.intent === "getMenu") {
            const menu = await prisma.menu.findMany({
		        select: {
		        plate: true,
		        price: true
		}
	    })
            res.status(200).json(menu)
        } else if (req.body.intent === "placeOrder") {
/*             if (req.body.order === "null") {
                res.status(200).json({ message: "no order" })
                return;
            }
            const orders = await prisma.tabla.update({
                data: {
                    orders: {
                        create: [
                            {
                                plate: req.body.order,
                            }
                        ]
                    }
                },
                where: {
                    id: 1
                }

            }) */
            console.log("loggin incoming order", JSON.parse(req.body.order).item)
            res.status(200).json(req.body)
        }
        
    } else if (req.method === "GET") {
            const menu = await prisma.menu.findMany({
                select: {
                    plate: true,
                    price: true
                }
            })
            res.status(200).json(menu)
        }
}
