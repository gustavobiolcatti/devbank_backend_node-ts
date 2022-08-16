"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var _1660600880192_relationUserAccount_1 = require("./migrations/1660600880192-relationUserAccount");
var _1660602550961_addAccountBalance_1 = require("./migrations/1660602550961-addAccountBalance");
var _1660612266624_addOperation_1 = require("./migrations/1660612266624-addOperation");
var Account_1 = __importDefault(require("./models/Account"));
var Operation_1 = __importDefault(require("./models/Operation"));
var User_1 = __importDefault(require("./models/User"));
dotenv_1.default.config();
console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: false,
    entities: [User_1.default, Account_1.default, Operation_1.default],
    migrations: [
        _1660600880192_relationUserAccount_1.relationUserAccount1660600880192,
        _1660602550961_addAccountBalance_1.addAccountBalance1660602550961,
        _1660612266624_addOperation_1.addOperation1660612266624
    ],
    subscribers: [],
});
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map