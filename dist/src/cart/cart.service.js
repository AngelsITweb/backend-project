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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CartService = class CartService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll(userId) {
        const parsedUserId = parseInt(userId, 10);
        return this.prisma.cart.findMany({
            where: {
                userId: parsedUserId
            },
        });
    }
    async getById(id) {
        return this.prisma.cart.findUnique({
            where: {
                id,
            },
        });
    }
    async createCart(userId, partIds) {
        const parts = await this.prisma.part.findMany({
            where: {
                id: {
                    in: partIds,
                },
            },
        });
        const totalPrice = parts.reduce((total, part) => total + part.price, 0);
        const totalCount = parts.length;
        const cart = await this.prisma.cart.create({
            data: {
                userId,
                price: totalPrice,
                count: totalCount,
                parts: {
                    connect: parts.map(part => ({ id: part.id })),
                },
            },
            include: {
                parts: true,
            },
        });
        return cart;
    }
    async deleteCart(id) {
        return this.prisma.cart.delete({
            where: {
                id
            }
        });
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartService);
//# sourceMappingURL=cart.service.js.map