import dotenv from 'dotenv';
import "reflect-metadata";
import { DataSource } from "typeorm";
import User from "./models/User";

dotenv.config();

console.log('process.env.DATABASE_URL :>> ' ,process.env.DATABASE_URL)

const dataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ['database/migrations/*.{ts,js}'],
    subscribers: [],
});

export default dataSource;