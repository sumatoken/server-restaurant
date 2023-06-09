import { z } from "zod";
import { procedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
export const tablesRouter = router({
    getAllOrders: procedure
    .input(
        z.object({
            default: z.boolean().optional()
        })
    )
    .query( async () => {
        const orders = await prisma.tabla.findMany({
            include: {
                orders: true,
            }
        })
        return orders
    }),
    createOrder: procedure
    .input(
        z.object({
            plate: z.string(),
            tableId: z.number()
        }
    ))
    .query( async ({ input }) => {
        const order = await prisma.order.create({
            data: {
                plate: input.plate,
                tableId: input.tableId
            }
        })
        return order
    }),
  })    