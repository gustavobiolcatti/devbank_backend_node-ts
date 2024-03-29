"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../models/User"));
var data_source_1 = __importDefault(require("./../data-source"));
var account_controller_1 = __importDefault(require("./account-controller"));
var userRepo = data_source_1.default.getRepository(User_1.default);
var UserController = /** @class */ (function () {
    function UserController() {
    }
    var _a;
    _a = UserController;
    //GET
    UserController.findAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var users, error_1;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userRepo.find()];
                case 1:
                    users = _b.sent();
                    return [2 /*return*/, res.status(200).json(users)];
                case 2:
                    error_1 = _b.sent();
                    return [2 /*return*/, res.json({
                            message: error_1.message
                        })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    UserController.findByEmail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var email, resp, error_2;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    email = req.params.email;
                    return [4 /*yield*/, userRepo.findOneBy({ email: email })];
                case 1:
                    resp = _b.sent();
                    return [2 /*return*/, res.status(200).json(resp)];
                case 2:
                    error_2 = _b.sent();
                    return [2 /*return*/, res.json({
                            message: error_2.message
                        })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    //POST
    UserController.create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, error_3;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    data = req.body;
                    return [4 /*yield*/, userRepo.save(data)];
                case 1:
                    _b.sent();
                    return [2 /*return*/, res.status(201).json({
                            message: 'Usuário criado com sucesso',
                            data: data
                        })];
                case 2:
                    error_3 = _b.sent();
                    return [2 /*return*/, res.json({
                            message: error_3.message
                        })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    //PUT
    UserController.updateByEmail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, email, id, error_4;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    data = req.body;
                    email = req.params.email;
                    return [4 /*yield*/, userRepo.findOneBy({ email: email })];
                case 1:
                    id = (_b.sent()).id;
                    return [4 /*yield*/, userRepo.update(id, data)];
                case 2:
                    _b.sent();
                    return [2 /*return*/, res.status(300).json({
                            message: "Usu\u00E1rio ".concat(email, " atualizado")
                        })];
                case 3:
                    error_4 = _b.sent();
                    return [2 /*return*/, res.json({
                            message: error_4.message
                        })];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    //DELETE
    UserController.deleteByEmail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var email, user, error_5;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    email = req.params.email;
                    return [4 /*yield*/, userRepo.findOneBy({ email: email })];
                case 1:
                    user = _b.sent();
                    return [4 /*yield*/, userRepo.delete(user.id)];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, account_controller_1.default.deleteById(user.account.id)];
                case 3:
                    _b.sent();
                    return [2 /*return*/, res.status(200).json({
                            message: "Usu\u00E1rio e conta de ".concat(email, " deletado")
                        })];
                case 4:
                    error_5 = _b.sent();
                    return [2 /*return*/, res.json({
                            message: error_5.message
                        })];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return UserController;
}());
exports.default = UserController;
//# sourceMappingURL=user-controller.js.map