import { router } from '../trpc';
import { menuRouter } from './menu';
import { tablesRouter } from './tables';

export const appRouter = router({
 menu: menuRouter,
 tables: tablesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;