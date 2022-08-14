import { Router } from "express";
import UserController from "../controller/user-controller";

const userRoutes = Router();

userRoutes.get('/', UserController.findAll);
userRoutes.get('/:email', UserController.findByEmail);

userRoutes.post('/', UserController.create);

userRoutes.put('/:email', UserController.updateByEmail);

userRoutes.delete('/:email', UserController.deleteByEmail);

export default userRoutes;