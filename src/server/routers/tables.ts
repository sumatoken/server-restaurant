import { procedure, router } from "../trpc";

export const tablesRouter = router({
    getAllOrders: procedure
    .query( async () => {
        const orders = await prisma?.tabla.findMany({
            include: {
                orders: true,
            }
        })
        return orders
    })
})