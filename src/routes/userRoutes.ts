import { Router } from "express";
import UserController from "../controller/user-controller";

const userRoutes = Router();

userRoutes.get('/', UserController.findAll)

userRoutes.post('/', UserController.create)

userRoutes.put('/:id', UserController.updateById)

userRoutes.delete('/:id', UserController.deleteById)

export default userRoutes;