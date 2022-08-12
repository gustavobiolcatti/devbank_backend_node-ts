
import "reflect-metadata";
import { DataSource } from "typeorm";
import User from "./models/User";

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "docker",
    database: "integracao",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ['database/migrations/*.ts'],
    subscribers: [],
});

export default dataSource;