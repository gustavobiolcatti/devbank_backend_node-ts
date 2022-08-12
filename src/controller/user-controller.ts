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
    static updateById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const data = req.body;

            await repo.update(id, data)

            return res.status(300).json({
                message: `Usuário ${id} atualizado`
            })
        } 
        catch (error: any) {
            return res.json({
                message: error.message
            });
        }
    }

    //DELETE
    static deleteById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            await repo.delete(id)

            return res.status(200).json({
                message: `Usuário ${id} deletado`
            })
        }
        catch (error: any) {
            return res.json({
                message: error.message
            });
        }
    }
}