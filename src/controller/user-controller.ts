import { Request, Response } from "express";
import { Repository } from "typeorm";
import User from "../models/User";
import dataSource from './../data-source';
import AccountController from "./account-controller";

const userRepo = dataSource.getRepository(User);
export default class UserController {
    //GET
    static findAll = async (req: Request, res: Response): Promise<Response>  => {
        try {
            const users: User[] = await userRepo.find();
            return res.status(200).json(users);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        }
    }

    static findByEmail = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { email } = req.params;

            const resp = await userRepo.findOneBy({ email });

            return res.status(200).json(resp);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        }
    }

    //POST
    static create = async (req: Request, res: Response): Promise<Response> => {
        try {
            const data = req.body;
            await userRepo.save(data);

            return res.status(201).json({
                message: 'Usuário criado com sucesso',
                data
            });
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        }
    }

    //PUT
    static updateByEmail = async (req: Request, res: Response): Promise<Response> => {
        try {
            const data = req.body;
            const { email } = req.params;

            const { id } = await userRepo.findOneBy({ email });

            await userRepo.update(id, data);

            return res.status(300).json({
                message: `Usuário ${email} atualizado`
            });
        } 
        catch (error: any) {
            return res.json({
                message: error.message
            });
        }
    }

    //DELETE
    static deleteByEmail = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { email } = req.params;

            const user = await userRepo.findOneBy({ email });

            await userRepo.delete(user.id);
            await AccountController.deleteById(user.account.id);

            return res.status(200).json({
                message: `Usuário e conta de ${email} deletado`
            });
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        }
    }
}