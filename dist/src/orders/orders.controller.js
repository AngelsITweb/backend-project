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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const orders_service_1 = require("./orders.service");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async getAll(userId) {
        const parsedUserId = parseInt(userId, 10);
        return this.ordersService.getAll(parsedUserId);
    }
    async getById(id) {
        const parsedId = parseInt(id, 10);
        return this.ordersService.getById(parsedId);
    }
    async createOrder(userId, body) {
        const parsedUserId = parseInt(userId, 10);
        return this.ordersService.createOrder(body.cartId, parsedUserId, body.deliveryAddress, body.phoneNumber, body.paymentScreenshot);
    }
    async getPayedOrders() {
        return this.ordersService.getPayedOrders();
    }
    async updateStatus(body) {
        const parsedId = parseInt(body.id, 10);
        return this.ordersService.updateStatus(parsedId, body.status);
    }
    async getPaymentConfirmed() {
        return this.ordersService.getPaymentConfirmed();
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Headers)('user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Headers)('user-id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Get)('manager/payed-orders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getPayedOrders", null);
__decorate([
    (0, common_1.Patch)('/manager/status/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Get)('manager/payment-confirmed-orders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getPaymentConfirmed", null);
exports.OrdersController = OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
//# sourceMappingURL=orders.controller.js.map