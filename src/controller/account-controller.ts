import { Request, response, Response } from 'express';
import dataSource from '../data-source';
import Account from '../models/Account';

export const accountRepo = dataSource.getRepository(Account);

export default class AccountController {
    //GET
    static findAll = async (req: Request, res: Response): Promise<Response> => {
        try {
            const accounts = await accountRepo.find();
            return res.status(200).json(accounts);
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
            const account = await accountRepo.findOne( { where: { id } });

            return res.status(200).json(account);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        }
    }

    //DELETE
    static deleteById = async (id: string): Promise<Response> => {
        try {
            await accountRepo.delete(id);

            return response.status(200);
        }
        catch (error: any) {
            return response.status(400);
        }
    }
}