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
exports.AddUserIdMiddleware = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AddUserIdMiddleware = class AddUserIdMiddleware {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async use(req, res, next) {
        try {
            const telegramId = req.headers['telegram-id'];
            if (!telegramId) {
                return res.status(400).json({ error: 'Telegram ID not provided in headers' });
            }
            const user = await this.prisma.user.findFirst({
                where: {
                    telegramId: parseInt(telegramId),
                },
            });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            req.headers['user-id'] = user.id.toString();
            next();
        }
        catch (error) {
            console.error('Error in AddUserIdMiddleware:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};
exports.AddUserIdMiddleware = AddUserIdMiddleware;
exports.AddUserIdMiddleware = AddUserIdMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AddUserIdMiddleware);
//# sourceMappingURL=TelegramIdToUserId.js.map