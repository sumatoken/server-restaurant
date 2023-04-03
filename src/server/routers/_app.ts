import { router } from '../trpc';
import { menuRouter } from './menu';
import { ordersRouter } from './orders';

export const appRouter = router({
 menu: menuRouter,
 orders: ordersRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;