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
            if (req.body.order === "null") {
                res.status(200).json({ message: "no order" })
                return;
            }
            const incomingOrder = JSON.parse(req.body.order)

            const order = await prisma.tabla.upsert({
                where: {
                    id: Number(incomingOrder.table)
                },
                update: {
                    orders: {
                        create: {
                            plate: incomingOrder.item,   
                        },
                    }
                },
                create: {
                    orders: {
                        create: {
                            plate: incomingOrder.item,   
                        },
                    }
                }
            })
            console.log("loggin incoming order", incomingOrder.item, incomingOrder.table)
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
