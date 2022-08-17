import dotenv from 'dotenv';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { createTables1660778958938 } from './migrations/1660778958938-createTables';
import Account from './models/Account';
import Operation from './models/Operation';
import User from './models/User';

dotenv.config();

console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL)

const dataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    entities: [User, Account, Operation],
    migrations: [
        createTables1660778958938
    ],
    subscribers: [],
});

export default dataSource;