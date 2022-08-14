import { Request, Response } from "express";
import User from "../models/User";
import dataSource from './../data-source';

const repo = dataSource.getRepository(User);

export default class UserController {
    //GET
    static findAll = async (req: Request, res: Response) => {
        try {
            const users = await repo.find();
            return res.status(200).json(users);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        }
    }

    static findByEmail = async (req: Request, res: Response) => {
        try {
            const { email } = req.params;

            const resp = await repo.findOneBy({ email });

            return res.status(200).json(resp);
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        }
    }

    //POST
    static create = async (req: Request, res: Response) => {
        try {
            const data = req.body;
            await repo.save(data);

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
    static updateByEmail = async (req: Request, res: Response) => {
        try {
            const data = req.body;
            const { email } = req.params;

            const { id } = await repo.findOneBy({ email });

            await repo.update(id, data);

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
    static deleteByEmail = async (req: Request, res: Response) => {
        try {
            const { email } = req.params;

            const { id } = await repo.findOneBy({ email });

            await repo.delete(id);

            return res.status(200).json({
                message: `Usuário ${email} deletado`
            });
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        }
    }
}