import { Router } from "express";
import OperationController from "../controller/operation-controller";

const operationRouter = Router();

operationRouter.get('/', OperationController.findAll);
operationRouter.get('/:email', OperationController.findByEmail);

operationRouter.post('/', OperationController.createOperation);

export default operationRouter;