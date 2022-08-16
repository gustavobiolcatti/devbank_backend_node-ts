import { userRepo } from './user-controller';
import { Request, response, Response } from 'express';
import dataSource from '../data-source';
import Account from '../models/Account';
import User from '../models/User';

export const accountRepo = dataSource.getRepository(Account);

export default class AccountController {
    static updateBalance = async (sender: number, receiver: number, value: number): Promise<void> => {
        try {
            const accountSender: Account = await accountRepo.findOneBy({accountNumber: sender});
            const accountReceiver: Account = await accountRepo.findOneBy({accountNumber: receiver});

            const newBalanceSender = accountSender.balance - value;
            const newBalanceReceiver = accountReceiver.balance + value;

            await accountRepo.update(accountSender.id, {balance: newBalanceSender});
            await accountRepo.update(accountReceiver.id, {balance: newBalanceReceiver});
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
            const { email } = req.params;

            const user: User = await userRepo.findOneBy({ email });

            return res.status(200).json(user.account.balance);
        } 
        catch (error: any) {
            const { email } = req.params;

            return res.json({
                error: error.message,
                message: `User ${email} not found`
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