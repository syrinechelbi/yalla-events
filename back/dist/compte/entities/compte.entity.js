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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compte = void 0;
const organisateur_entity_1 = require("../../organisateur/entities/organisateur.entity");
const typeorm_1 = require("typeorm");
let Compte = class Compte {
};
exports.Compte = Compte;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Compte.prototype, "idCompte", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, unique: true }),
    __metadata("design:type", String)
], Compte.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Compte.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => organisateur_entity_1.organisateur, organisateur => organisateur.compte),
    __metadata("design:type", organisateur_entity_1.organisateur)
], Compte.prototype, "organisateur", void 0);
exports.Compte = Compte = __decorate([
    (0, typeorm_1.Entity)('compte')
], Compte);
//# sourceMappingURL=compte.entity.js.map