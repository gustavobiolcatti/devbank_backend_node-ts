import { 
    Request, 
    Response 
} from "express";
import dataSource from "../data-source";
import Operation from "../models/Operation";

const operationRepo = dataSource.getRepository(Operation);

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
        }
    }

    static findById = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const account = await operationRepo.findOne( { where: { id } });

            return res.status(200).json(account);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        }
    }

    //POST
    static createOperation = async (req: Request, res: Response): Promise<Response> => {
        try {
            const operation: Operation = req.body;

            await operationRepo.save(operation)

            return res.status(200).json(operation);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        }
    }
}