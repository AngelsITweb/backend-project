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
exports.PartController = void 0;
const common_1 = require("@nestjs/common");
const part_service_1 = require("./part.service");
let PartController = class PartController {
    constructor(partService) {
        this.partService = partService;
    }
    async getAll(body) {
        return this.partService.getAll(body.carId);
    }
    async getById(body) {
        return this.partService.getById(body.id);
    }
    async createPart(body) {
        return this.partService.createPart(body.manufacturer, body.state, body.numberOrName, body.price, body.image, body.sellerId, body.carId);
    }
};
exports.PartController = PartController;
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PartController.prototype, "createPart", null);
exports.PartController = PartController = __decorate([
    (0, common_1.Controller)('part'),
    __metadata("design:paramtypes", [part_service_1.PartService])
], PartController);
//# sourceMappingURL=part.controller.js.map