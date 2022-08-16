import { Router } from "express";
import accountRouter from "./account-routes";
import operationRouter from "./operation-routes";
import userRoutes from "./user-routes";

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/account', accountRouter);
routes.use('/operation', operationRouter)

export default routes;