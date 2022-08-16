"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User_1 = __importDefault(require("./User"));
var Account = /** @class */ (function () {
    function Account() {
    }
    Account_1 = Account;
    var Account_1;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Account.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            default: 1234
        }),
        __metadata("design:type", Number)
    ], Account.prototype, "agency", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "integer",
            name: 'account_number',
            unique: true,
        }),
        __metadata("design:type", Number)
    ], Account.prototype, "accountNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            default: 0,
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], Account.prototype, "balance", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function (type) { return User_1.default; }, function (account) { return Account_1; }),
        __metadata("design:type", User_1.default)
    ], Account.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
        __metadata("design:type", Date)
    ], Account.prototype, "createdAt", void 0);
    Account = Account_1 = __decorate([
        (0, typeorm_1.Entity)()
    ], Account);
    return Account;
}());
exports.default = Account;
//# sourceMappingURL=Account.js.map