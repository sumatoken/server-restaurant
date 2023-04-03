import { z } from "zod";
import { procedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
export const menuRouter = router({
    getAll: procedure
    .query( async () => {
        const menu = await prisma.menu.findMany();
        return menu;
    }),
    addRecord: procedure
    .input(
        z.object({
            plate: z.string(),
            ingredients: z.string(),
            price: z.string()
        })
    )
    .mutation( async ({ input }) => {
        const menuRecord = await prisma.menu.create({
            data: {
                plate: input.plate,
                ingredients: input.ingredients,
                price: input.price
            }
        })
        return menuRecord
    })
}) 