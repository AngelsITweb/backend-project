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
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const cars_service_1 = require("./cars.service");
const client_1 = require("@prisma/client");
let CarsController = class CarsController {
    constructor(carsService) {
        this.carsService = carsService;
    }
    async getAll(userId) {
        const parsedUserId = parseInt(userId, 10);
        return await this.carsService.getAll(parsedUserId);
    }
    async createCar(body, userId) {
        const parsedUserId = parseInt(userId, 10);
        if (!body || !body.brand || !body.model || !body.number || !body.image) {
            throw new Error('Не все обязательные поля были переданы');
        }
        const { brand, model, number, image } = body;
        if (!Object.values(client_1.Brands).includes(brand)) {
            throw new Error('Неверное значение бренда');
        }
        return await this.carsService.createCar({ ownerId: parsedUserId, brand, model, number, image });
    }
    async getById(id) {
        return await this.carsService.getById(parseInt(id, 10));
    }
    async deleteCar(body) {
        const { carId } = body;
        return await this.carsService.deleteCar(carId);
    }
};
exports.CarsController = CarsController;
__decorate([
    (0, common_1.Get)('getAll'),
    __param(0, (0, common_1.Headers)('user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('createCar'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "createCar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getById", null);
__decorate([
    (0, common_1.Delete)('deleteCar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "deleteCar", null);
exports.CarsController = CarsController = __decorate([
    (0, common_1.Controller)('cars'),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
//# sourceMappingURL=cars.controller.js.map