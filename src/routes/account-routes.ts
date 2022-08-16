import { Router } from "express";
import AccountController from "../controller/account-controller";

const accountRouter = Router();

accountRouter.get('/', AccountController.findAll);
accountRouter.get('/:id', AccountController.findById);

export default accountRouter;