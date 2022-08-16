import { Router } from "express";
import OperationController from "../controller/operation-controller";

const operationRouter = Router()

operationRouter.get('/', OperationController.findAll)

operationRouter.post('/', OperationController.createOperation)

export default operationRouter;