"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = __importDefault(require("./models/User"));
dotenv_1.default.config();
console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    entities: [User_1.default],
    migrations: ['database/migrations/*.{ts,js}'],
    subscribers: [],
});
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map