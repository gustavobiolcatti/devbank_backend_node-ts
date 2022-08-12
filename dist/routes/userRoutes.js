"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("../controller/user-controller"));
var userRoutes = (0, express_1.Router)();
userRoutes.get('/', user_controller_1.default.findAll);
userRoutes.post('/', user_controller_1.default.create);
userRoutes.put('/:id', user_controller_1.default.updateById);
userRoutes.delete('/:id', user_controller_1.default.deleteById);
exports.default = userRoutes;
//# sourceMappingURL=userRoutes.js.map