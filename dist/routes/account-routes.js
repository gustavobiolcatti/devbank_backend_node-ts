"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var account_controller_1 = __importDefault(require("../controller/account-controller"));
var accountRouter = (0, express_1.Router)();
accountRouter.get('/', account_controller_1.default.findAll);
accountRouter.get('/:id', account_controller_1.default.findById);
exports.default = accountRouter;
//# sourceMappingURL=account-routes.js.map