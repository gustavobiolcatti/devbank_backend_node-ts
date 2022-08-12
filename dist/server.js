"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
var app_1 = __importDefault(require("./app"));
var data_source_1 = __importDefault(require("./data-source"));
dotenv_1.default.config();
var port = 3000;
app_1.default.listen(port, function () {
    console.log("Servidor ouvindo em http://localhost:".concat(port));
    data_source_1.default
        .initialize()
        .then(function () { return console.log("Banco conectado"); })
        .catch(function (error) { return console.log("error.message :>> ".concat(error.message)); });
});
//# sourceMappingURL=server.js.map