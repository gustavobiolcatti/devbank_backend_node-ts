"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var operation_controller_1 = __importDefault(require("../controller/operation-controller"));
var operationRouter = (0, express_1.Router)();
operationRouter.get('/', operation_controller_1.default.findAll);
operationRouter.post('/', operation_controller_1.default.createOperation);
exports.default = operationRouter;
//# sourceMappingURL=operation-routes.js.map