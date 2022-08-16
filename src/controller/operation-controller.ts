import { 
    Request, 
    Response 
} from "express";
import dataSource from "../data-source";
import Operation from "../models/Operation";
import User from "../models/User";
import AccountController from "./account-controller";
import { userRepo } from "./user-controller";

export const operationRepo = dataSource.getRepository(Operation);

export default class OperationController {
    //GET
    static findAll = async (req: Request, res: Response): Promise<Response> => {
        try {
            const operations: Operation[] = await operationRepo.find();
            return res.status(200).json(operations);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        };
    };

    static findByEmail = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { email } = req.params;

            const user: User = await userRepo.findOneBy({ email });

            const operations: Operation[] = await operationRepo.findBy([
                {sender: user.account.accountNumber}, 
                {receiver: user.account.accountNumber}
            ]);

            return res.status(200).json(operations);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        };
    };

    //POST
    static createOperation = async (req: Request, res: Response): Promise<Response> => {
        try {
            const operation: Operation = req.body;

            await operationRepo.save(operation);

            await AccountController.updateBalance(operation.sender, operation.receiver, operation.value);

            return res.status(200).json(operation);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        };
    };
}