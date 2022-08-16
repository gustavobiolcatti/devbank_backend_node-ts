import { Router } from "express";
import accountRouter from "./account-routes";
import userRoutes from "./user-routes";

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/account', accountRouter);

export default routes;