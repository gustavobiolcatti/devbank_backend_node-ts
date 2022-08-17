import dotenv from 'dotenv';
import "reflect-metadata";
import { DataSource } from "typeorm";
import { relationUserAccount1660600880192 } from './migrations/1660600880192-relationUserAccount';
import { addAccountBalance1660602550961 } from './migrations/1660602550961-addAccountBalance';
import { addOperation1660612266624 } from './migrations/1660612266624-addOperation';
import { relationAccountOperation1660771557136 } from './migrations/1660771557136-relationAccountOperation';
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
        relationUserAccount1660600880192, 
        addAccountBalance1660602550961, 
        addOperation1660612266624,
        relationAccountOperation1660771557136
    ],
    subscribers: [],
});

export default dataSource;