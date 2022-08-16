"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var account_routes_1 = __importDefault(require("./account-routes"));
var operation_routes_1 = __importDefault(require("./operation-routes"));
var user_routes_1 = __importDefault(require("./user-routes"));
var routes = (0, express_1.Router)();
routes.use('/user', user_routes_1.default);
routes.use('/account', account_routes_1.default);
routes.use('/operation', operation_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map