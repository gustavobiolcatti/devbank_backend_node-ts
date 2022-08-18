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

            await accountRepo.update(accountSender.accountNumber, {balance: newBalanceSender});
            await accountRepo.update(accountReceiver.accountNumber, {balance: newBalanceReceiver});
        }
        catch (error: any) {
            console.log(`Error :>> ${error.message}`)
        };
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

    static findByAccountNumber = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { accountNumber } = req.params;
            const accountNumberParsed = parseInt(accountNumber);

            const account: Account = await accountRepo.findOneBy({accountNumber: accountNumberParsed});

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
    static deleteByAccountNumber = async (accountNumber: number): Promise<Response> => {
        try {
            await accountRepo.delete(accountNumber);
            console.log('conta deletada')
            return response.status(200);
        }
        catch (error: any) {
            return response.status(400);
        };
    };
}