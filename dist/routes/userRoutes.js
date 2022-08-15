"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("../controller/user-controller"));
var userRoutes = (0, express_1.Router)();
userRoutes.get('/', user_controller_1.default.findAll);
userRoutes.get('/:email', user_controller_1.default.findByEmail);
userRoutes.post('/', user_controller_1.default.create);
userRoutes.put('/:email', user_controller_1.default.updateByEmail);
userRoutes.delete('/:email', user_controller_1.default.deleteByEmail);
exports.default = userRoutes;
//# sourceMappingURL=userRoutes.js.map