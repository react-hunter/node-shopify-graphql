import { Router } from 'express';
import UserRouter from './Users';
import ShopifyGraphqlRouter from './ShopifyGraphql';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/testgraphql', ShopifyGraphqlRouter)

// Export the base-router
export default router;
