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
                userId: parsedUserId,
            },
            include: {
                parts: true,
            },
        });
    }
    async getById(id) {
        return this.prisma.cart.findFirst({
            where: {
                id,
            },
            include: {
                parts: true
            }
        });
    }
    async createCart(userId, partId) {
        const existingCart = await this.prisma.cart.findFirst({
            where: { userId },
            include: { parts: true },
        });
        if (existingCart) {
            const partAlreadyInCart = existingCart.parts.some(part => part.id === partId);
            if (partAlreadyInCart) {
                return existingCart;
            }
            else {
                const cart = await this.prisma.cart.update({
                    where: { id: existingCart.id },
                    data: {
                        parts: {
                            connect: { id: partId },
                        },
                        count: { increment: 1 },
                        price: { increment: (await this.prisma.part.findUnique({ where: { id: partId } })).price },
                    },
                    include: {
                        parts: true,
                    },
                });
                return cart;
            }
        }
        else {
            const part = await this.prisma.part.findUnique({
                where: { id: partId },
            });
            if (!part) {
                throw new Error('Деталь не найдена');
            }
            const cart = await this.prisma.cart.create({
                data: {
                    userId,
                    price: part.price,
                    count: 1,
                    parts: {
                        connect: { id: partId },
                    },
                },
                include: {
                    parts: true,
                },
            });
            return cart;
        }
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