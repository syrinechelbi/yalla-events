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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisateurController = void 0;
const common_1 = require("@nestjs/common");
const organisateur_service_1 = require("./organisateur.service");
const create_organisateur_dto_1 = require("./dto/create-organisateur.dto");
const update_organisateur_dto_1 = require("./dto/update-organisateur.dto");
let OrganisateurController = class OrganisateurController {
    constructor(organisateurService) {
        this.organisateurService = organisateurService;
    }
    findAll() {
        return this.organisateurService.findAll();
    }
    findOne(id) {
        return this.organisateurService.findOne(id);
    }
    createOrganisateur(createOrganisateurDto) {
        return this.organisateurService.create(createOrganisateurDto);
    }
    update(id, updateOrganisateurDto) {
        return this.organisateurService.update(id, updateOrganisateurDto);
    }
    remove(id) {
        return this.organisateurService.remove(id);
    }
    findByName(nom) {
        return this.organisateurService.findByName(nom);
    }
};
exports.OrganisateurController = OrganisateurController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrganisateurController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrganisateurController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organisateur_dto_1.CreateOrganisateurDto]),
    __metadata("design:returntype", Promise)
], OrganisateurController.prototype, "createOrganisateur", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_organisateur_dto_1.UpdateOrganisateurDto]),
    __metadata("design:returntype", Promise)
], OrganisateurController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrganisateurController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('name/:nom'),
    __param(0, (0, common_1.Param)('nom')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrganisateurController.prototype, "findByName", null);
exports.OrganisateurController = OrganisateurController = __decorate([
    (0, common_1.Controller)('organisateur'),
    __metadata("design:paramtypes", [organisateur_service_1.OrganisateurService])
], OrganisateurController);
//# sourceMappingURL=organisateur.controller.js.map