import { Request, response, Response } from 'express';
import dataSource from '../data-source';
import Account from '../models/Account';

export const accountRepo = dataSource.getRepository(Account);

export default class AccountController {
    static updateBalance = async (sender: number, receiver: number, value: number): Promise<void> => {
        try {
            let newBalance: number = 0;

            const account: Account = await accountRepo.findOneBy([
                {accountNumber: sender},
                {accountNumber: receiver}
            ]);

            if (account.accountNumber === sender) {
                newBalance = account.balance - value;
            }
            else {
                newBalance = account.balance + value;
            };

            await accountRepo.update(account.id, {balance: newBalance});
        }
        catch (error) {};
    };

    //GET
    static findAll = async (req: Request, res: Response): Promise<Response> => {
        try {
            const accounts: Account[] = await accountRepo.find();
            return res.status(200).json(accounts);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        };
    };

    static findById = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const account: Account = await accountRepo.findOne( { where: { id } });

            return res.status(200).json(account);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        };
    };

    static getBalance = async (req: Request, res: Response): Promise<Response> => {
        try {
            const accountNumber: number = parseInt(req.params.accountNumber);
            const { balance }: Account = await accountRepo.findOneBy({ accountNumber });

            return res.status(200).json(balance);
        } 
        catch (error: any) {
            return res.json({
                message: error.message
            });
        };
    };

    //DELETE
    static deleteById = async (id: string): Promise<Response> => {
        try {
            await accountRepo.delete(id);

            return response.status(200);
        }
        catch (error: any) {
            return response.status(400);
        };
    };
}